package com.cohortE.cohortProject.service.impl;

import com.cohortE.cohortProject.entity.Reminder;
import com.cohortE.cohortProject.service.DailyLogService;
import com.cohortE.cohortProject.service.MedicationLogService;
import com.cohortE.cohortProject.service.ReminderService;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
@Component
@EnableScheduling
@Service
public class DailyLogServiceImpl implements DailyLogService {

    private final ReminderService reminderService;
    private final MedicationLogService medicationLogService;

    public DailyLogServiceImpl(ReminderService reminderService, MedicationLogService medicationLogService) {
        this.reminderService = reminderService;
        this.medicationLogService = medicationLogService;
    }
    @Scheduled(cron = "@midnight", zone = "America/Chicago") //  this code is for runs every day at midnight  "0 0 0 * * *"
    @Override
    public void addNewDailyMedicationLog() {
        List<Reminder> listOfDailyReminders  =  reminderService.getAllDailyReminders();
        for(Reminder reminder : listOfDailyReminders) {
            medicationLogService.addMedicationLog(reminder);
        }
    }
}
