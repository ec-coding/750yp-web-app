package com.cohortE.cohortProject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "medication_logs")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MedicationLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "log_id")
    private Long id;
    @Column(name = "log_date")
    private LocalDate logDate;
    @Column(name = "was_taken")
    private boolean taken;
    @Column(name = "time_taken")
    private LocalDateTime timeTaken;
    @ToString.Exclude
    @ManyToOne
    @JoinColumn(name = "reminder_id")
    private Reminder reminder;
}
