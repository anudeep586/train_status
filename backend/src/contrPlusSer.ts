import knex from "../src/database/db";
import { stringify, v4 as uuidv4 } from "uuid";
const axios = require("axios");

export const addBook=async (ctx:any)=>{
    try{
   const data= await knex('bookgram').insert({id:uuidv4(),bookName:ctx.request.body.bookName,author:ctx.request.body.author,pages:ctx.request.body.pages}).returning("*")
   ctx.body=data
    }
    catch(err){
        ctx.body=err
    }
}

export const updateBook=async(ctx:any)=>{
    try{
        console.log(ctx.request.params)
        const updated = await knex("bookgram").where({ id:ctx.request.params.id }).update({bookName:ctx.request.body.bookName,author:ctx.request.body.author,pages:ctx.request.body.pages}).returning("*");
        ctx.body=updated
    }
    catch(err){
        ctx.status=404
        ctx.body=err
    }
}


export const deleteBook=async(ctx:any)=>{
    try{
        const data = await knex("bookgram").where({ id: ctx.request.params.id }).del().returning("*")
        ctx.body=data
    }
    catch(err){
        ctx.status=404
        ctx.body=err
    }
}

export const getBooks=async(ctx:any)=>{
    try{
        console.log("cool")
        const books=await knex.select().from('bookgram')
        console.log(books)
        ctx.body=books
    }
    catch(err){
        ctx.status=404
        ctx.body=err
    }
}

export const getPnr=async(ctx:any)=>{
    try{
        // const options = {
        //     method: 'GET',
        //     url: 'https://pnr-status-indian-railway.p.rapidapi.com/rail/8531575878',
        //     headers: {
        //       'X-RapidAPI-Key': '09d509bc69msh92bd38c9e8adc6ep1b6391jsn7510ac57e20b',
        //       'X-RapidAPI-Host': 'pnr-status-indian-railway.p.rapidapi.com'
        //     }
        //   };
        console.log("entering")
          let pnrData=await axios.get(`https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus`,{
            params: {trainNo: `${ctx.request.params.pnrId}`, startDay: '1'},
            headers: {
                'X-RapidAPI-Key': 'a9f267d429msh19eed4e107286b8p1816f4jsna44a2328f680',
                'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
              }
          })
          console.log("entered") 
          console.log(pnrData,"pnrData")
          console.log(pnrData.data)
          const data={trainName:pnrData.data.data.train_name,source:pnrData.data.data.source,destination:pnrData.data.data.destination,run_days:pnrData.data.data.run_days} 
          console.log(data)
          ctx.body=data
    }
    catch(err){
        ctx.status=404
        console.log(err)
        ctx.body=err
    }
}


// {
//     "status": true,
//     "message": "Success",
//     "timestamp": 1656592183864,
//     "data": {
//         "user_id": 0,
//         "train_start_date": "2022-06-29",
//         "train_number": "12389",
//         "train_name": "GAYA - MGR CHENNAI CENTRAL SF Express",
//         "title": "Incorrect Start Day",
//         "success": true,
//         "std": "2022-06-29 05:30",
//         "spent_time": 0.046,
//         "source": "GAYA",
//         "seo_train_name": "Gaya Ms Express",
//         "run_days": "SUN",
//         "notification_date": "2022-06-30",
//         "new_message": "This train runs only on SUN",
//         "journey_time": 2080,
//         "is_run_day": false,
//         "ir_train_name": "GAYA MAS EXPRES",
//         "destination": "MAS",
//         "at_src_dstn": true,
//         "at_src": true,
//         "at_dstn": false,
//         "upcoming_stations": []
//     }
// }