package com.cohortE.cohortProject.service.impl;

import com.cohortE.cohortProject.dto.MedicationDto;
import com.cohortE.cohortProject.entity.Medication;
import com.cohortE.cohortProject.entity.Reminder;
import com.cohortE.cohortProject.repository.ReminderRepository;
import com.cohortE.cohortProject.service.MedicationLogService;
import com.cohortE.cohortProject.service.ReminderService;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Service
public class ReminderServiceImpl implements ReminderService {

    private final ReminderRepository reminderRepository;
    private final MedicationLogService medicationLogService;

    public ReminderServiceImpl(ReminderRepository reminderRepository, MedicationLogService medicationLogService) {
        this.reminderRepository = reminderRepository;
        this.medicationLogService = medicationLogService;
    }

    @Override
    public Reminder addReminder(Medication medication, LocalTime dosageTime) {
        Reminder reminder = new Reminder();
        reminder.setDosageTime(dosageTime);
        reminder.setMedication(medication);
        Reminder newReminder =  reminderRepository.save(reminder);
        medicationLogService.addMedicationLog(newReminder);
        return newReminder;
    }
    @Override
    public void updateDosageInfo(Long id, MedicationDto medicationDto){
        Optional<Reminder> reminder = reminderRepository.findById(id);
        reminder.get().setDosageTime(medicationDto.getDosageTime());
        reminder.get().getMedication().setDosageFrequency(medicationDto.getDosageFrequency());
        reminder.get().getMedication().setDosageAmount(medicationDto.getDosageAmount());
        reminderRepository.save(reminder.get());
    }

    public List<Reminder> getAllDailyReminders(){

        return reminderRepository.findAllByMedicationDosageFrequency("Daily");
    }

    @Override
    public Optional<Reminder> getReminderById(Long reminderId) {
        return reminderRepository.findById(reminderId);
    }
}
