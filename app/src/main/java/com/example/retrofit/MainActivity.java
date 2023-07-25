package com.example.retrofit;

import static java.util.Arrays.*;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;
import android.widget.Toolbar;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MainActivity extends AppCompatActivity {
    private Retrofit retrofit,retrofit1;
    private ServicePeople servicePeople;
    private ServiceUser serviceUser;
    private Button btndownload,btndownload1;
    private static final String URL="https://jsonplaceholder.typicode.com/";
    private static  final String URL1="http://api.open-notify.org/";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        btndownload = findViewById(R.id.btn_download);
        btndownload1=findViewById(R.id.btn_downloaduser);
        retrofit = new Retrofit.Builder().baseUrl(URL).addConverterFactory(GsonConverterFactory.create()).build();
        retrofit1 = new Retrofit.Builder()
                .baseUrl(URL1)
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        servicePeople=retrofit.create(ServicePeople.class);
        serviceUser=retrofit1.create(ServiceUser.class);
        btndownload.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Call<List<People>> call = servicePeople.getAllPeople();
                call.enqueue(new Callback<List<People>>() {
                    @Override
                    public void onResponse(Call<List<People>> call, Response<List<People>> response) {
                                getData(response.body());
                    }

                    @Override
                    public void onFailure(Call<List<People>> call, Throwable t) {

                    }
                });
            }
        });
        btndownload1.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                Call<arrayPeople> arrayPeopleCall=serviceUser.getAllUser();
                arrayPeopleCall.enqueue(new Callback<arrayPeople>() {
                    @Override
                    public void onResponse(Call<arrayPeople> call, Response<arrayPeople> response) {

                        Toast.makeText(getApplicationContext(),"dfasdfds",Toast.LENGTH_SHORT).show();
                        arrayPeople people=response.body();
                        GetUser(Arrays.asList(people.getPeople()));
                    }

                    @Override
                    public void onFailure(Call<arrayPeople> call, Throwable t) {

                    }
                });
            }
        });

    }
    private void getData(List<People> ls){
        for(People p:ls){
            Log.i("==people",p.toString());
        }
    }
    private void GetUser(List<User> ls){
        for(User p:ls){
            Log.i("===user",p.toString());
        }
    }
}