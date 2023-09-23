package com.cohortE.cohortProject.repository;

import com.cohortE.cohortProject.entity.MedicationLog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface MedicationLogRepository extends JpaRepository<MedicationLog, Long> {

    List<MedicationLog>findByLogDateAndReminderMedicationUserId(LocalDate logDate, Long id);

}
