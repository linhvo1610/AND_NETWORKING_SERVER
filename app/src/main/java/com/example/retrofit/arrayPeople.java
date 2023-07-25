package com.example.retrofit;

import java.util.Arrays;

public class arrayPeople {
    private int number;
    private String message;
    private User[]people;

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public User[] getPeople() {
        return people;
    }

    public void setPeople(User[] people) {
        this.people = people;
    }

    public arrayPeople(int number, String message, User[] people) {
        this.number = number;
        this.message = message;
        this.people = people;
    }

    @Override
    public String toString() {
        return "arrayPeople{" +
                "number=" + number +
                ", message='" + message + '\'' +
                ", people=" + Arrays.toString(people) +
                '}';
    }
}
