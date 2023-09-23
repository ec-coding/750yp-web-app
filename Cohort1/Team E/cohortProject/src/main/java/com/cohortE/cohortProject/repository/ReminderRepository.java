package com.cohortE.cohortProject.repository;

import com.cohortE.cohortProject.entity.Reminder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReminderRepository extends JpaRepository<Reminder, Long> {

    List<Reminder> findAllByMedicationDosageFrequency(String frequency);
}
