package com.example.medlista.android

import androidx.lifecycle.*
import com.example.medlista.RealmRepo
import com.example.medlista.UserInfo
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.flowOn
import kotlinx.coroutines.launch

class ProfileViewModel : ViewModel() {

    private val repo = RealmRepo()

    val userInfo: LiveData<UserInfo?> = liveData {
        emitSource(repo.getUserProfile().flowOn(Dispatchers.IO).asLiveData(Dispatchers.Main))
    }

    fun onLogout() {
        viewModelScope.launch {
            repo.doLogout()
        }
    }
}
