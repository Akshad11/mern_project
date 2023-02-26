const express = require("express")
const { default: mongoose } = require("mongoose")


const menSchema = new mongoose.Schema({
    cust_id: {
        type: Number,
        required: true,
        unique: true
    },
    cust_name: {
        type: String,
        required: true,
        trim: true

    },
    cust_dob: {
        type: Date,
        required: true,
        trim: true
    },
    cust_country: {
        type: String,
        required: true,
        trim: true
    },
    Phone_no: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true

    },
})


const MensRanking = new mongoose.model("MeRanking", menSchema)

module.exports = MensRanking;