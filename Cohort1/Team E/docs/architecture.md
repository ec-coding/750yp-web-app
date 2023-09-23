# Frontend

- Home Screen

  - Page title
  - Sign in/Sign Up button

- Login

  - Box to enter login name & password
  - Submit button

  - On Submit button click
    - Call backend & send username & password to authenticate
    - Backend to return true or false (true == authenicated, false == info does not match)
    - Handle return value
      - If True then Send user to "User dashboard" screen
      - If False then show "You have entered incorrect username or password. Please try again"

- Register for an account
- User dashboard

- Add Medication page
  - medication name textbox
  - medication type dropdown box
    - tablet, pill, liquid, spray
  - dosage amount textbox
  - dosage frequency dropdown box
    - daily, twice a day, weekly
  - dosage time dropdown box
    - number of dropdown boxes depend on dosage frequency
  - Submit Button
    - On click send medication and dosage information to backend
    - Handle response from server
      - If new medication added display "Your medication has been added!"
      - If medication fails display "Unable to add new medication."
  - Cancel Button
    - On click go back to User Dashboard Page

# Backend

- authenticateUser (string username & string password)
  Description: Method to validate (username & password) and return true or false

      - validate username & password are not empty
      - Match with database
          - if matched then return true
          - else return false

- addMedication(medication & currentUser)
  - add medication to database medicationType table
  - add remiders to database reminder table

# Database

- Create a new database

  - MedTrackerDB

- Create new tables

  - User

    - UserID
    - UserName
    - FirstName
    - LastName
    - Email
    - Password (secure)

  - Medication

    - MedicationID
    - Name
    - Type
    - DosesAmount
    - DosesNumberOfTimeADay
    - DoesByWhatTime

  - LogOfMedicationTaken
    - LogID
    - MedicationID
    - DateAndTime
