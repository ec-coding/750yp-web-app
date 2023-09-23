package com.cohortE.cohortProject.service.impl;

import com.cohortE.cohortProject.dto.MedicationLogDto;
import com.cohortE.cohortProject.entity.MedicationLog;
import com.cohortE.cohortProject.entity.Reminder;
import com.cohortE.cohortProject.repository.MedicationLogRepository;
import com.cohortE.cohortProject.service.MedicationLogService;
import com.cohortE.cohortProject.service.UserService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MedicationLogServiceImpl implements MedicationLogService {
    private final MedicationLogRepository medicationLogRepository;
    private final UserService userService;
    private static final ZoneId CENTRAL_TIME_ZONE = ZoneId.of("America/Chicago");

    public MedicationLogServiceImpl(MedicationLogRepository medicationLogRepository, UserService userService) {
        this.medicationLogRepository = medicationLogRepository;
        this.userService = userService;
    }

    public List<MedicationLogDto> getDailyUsersMedicationLogs(){
        List<MedicationLog> medicationLogs =
        medicationLogRepository.findByLogDateAndReminderMedicationUserId(LocalDate.now(CENTRAL_TIME_ZONE), userService.getCurrentUser().getId());
        List<MedicationLogDto> medicationLogDtos = new ArrayList<>();

        for(MedicationLog medicationLog : medicationLogs){
            MedicationLogDto medicationLogDto = mapEntityToDto(medicationLog);
            medicationLogDtos.add(medicationLogDto);
        }
        return medicationLogDtos;
    }


    @Override
    public void addMedicationLog(Reminder reminder) {
        MedicationLog medicationLog = new MedicationLog();
        medicationLog.setLogDate(LocalDate.now(CENTRAL_TIME_ZONE));
        medicationLog.setTaken(false);
        medicationLog.setReminder(reminder);
        medicationLogRepository.save(medicationLog);
    }

    @Override
    public void updateTakenStatus(Long id) {
        if (medicationLogRepository.existsById(id)) {
            Optional<MedicationLog> medicationLog = medicationLogRepository.findById(id);
            medicationLog.get().setTaken(true);
            medicationLog.get().setTimeTaken(LocalDateTime.now(CENTRAL_TIME_ZONE));
            medicationLogRepository.save(medicationLog.get());
        }
    }


    private MedicationLogDto mapEntityToDto(MedicationLog medicationLog) {
        MedicationLogDto medicationLogDto = new MedicationLogDto();
        medicationLogDto.setMedicationName(medicationLog.getReminder().getMedication().getMedicationName());
        medicationLogDto.setMedicationType(medicationLog.getReminder().getMedication().getMedicationType());
        medicationLogDto.setDosageAmount(medicationLog.getReminder().getMedication().getDosageAmount());
        medicationLogDto.setDosageFrequency(medicationLog.getReminder().getMedication().getDosageFrequency());
        medicationLogDto.setDosageTime(medicationLog.getReminder().getDosageTime());
        medicationLogDto.setTaken(medicationLog.isTaken());
        medicationLogDto.setMedicationLogId(medicationLog.getId());
        medicationLogDto.setReminderId(medicationLog.getReminder().getId());
        medicationLogDto.setMedicationId(medicationLog.getReminder().getMedication().getId());
        return medicationLogDto;
    }

}
