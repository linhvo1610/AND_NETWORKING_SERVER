package com.example.retrofit;

import retrofit2.Call;
import retrofit2.http.GET;

public interface ServiceUser {
    @GET("astros.json")
    Call<arrayPeople> getAllUser();
}
