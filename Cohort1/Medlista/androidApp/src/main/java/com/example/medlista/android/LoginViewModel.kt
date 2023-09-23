package com.example.medlista.android

import androidx.lifecycle.*
import com.example.medlista.RealmRepo
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class LoginViewModel : ViewModel() {

    private val repo: RealmRepo = RealmRepo()

    private val _loginStatus = MutableLiveData<Boolean>()
    val loginStatus: LiveData<Boolean> = _loginStatus

    val alreadyLoggedIn: LiveData<Boolean> = repo.isUserLoggedIn().asLiveData(Dispatchers.Main)

    fun doLogin(userName: String, password: String) {
        viewModelScope.launch(Dispatchers.IO) {
            repo.login(userName, password).apply {
                withContext(Dispatchers.Main) {
                    _loginStatus.value = true
                }
            }
        }
    }
}
