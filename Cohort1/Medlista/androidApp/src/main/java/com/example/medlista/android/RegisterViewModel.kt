package com.example.medlista.android

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.medlista.RealmRepo
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class RegisterViewModel : ViewModel() {

    private val repo = RealmRepo()
    private val registrationSuccess = MutableLiveData<Boolean>()

    fun register(email: String, password: String) {
        viewModelScope.launch(Dispatchers.IO) {
            try {
                repo.registration(password = password, email = email).run {
                    withContext(Dispatchers.Main) {
                        registrationSuccess.value = true
                    }
                }
            } catch (e: Exception) {
                withContext(Dispatchers.Main) {
                    registrationSuccess.value = false
                }
            }
        }
    }

}
