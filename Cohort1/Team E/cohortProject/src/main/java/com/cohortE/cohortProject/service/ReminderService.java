package com.cohortE.cohortProject.service;

import com.cohortE.cohortProject.dto.MedicationDto;
import com.cohortE.cohortProject.entity.Medication;
import com.cohortE.cohortProject.entity.Reminder;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

public interface ReminderService {

    Reminder addReminder(Medication medication, LocalTime dosageTime);

    public List<Reminder> getAllDailyReminders();

    Optional<Reminder> getReminderById(Long reminderId);
    void updateDosageInfo(Long id, MedicationDto medicationDto);
}
