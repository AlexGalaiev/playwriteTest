import {APIRequest, test, expect} from "@playwright/test";
import { request } from "http";

test("GET request", async({request})=>{
    const requestApi = await request.get("https://reqres.in/api/users/2");
    expect(requestApi.ok()).toBeTruthy;
    expect(requestApi.status()).toBe(200);
    const responseBody = await requestApi.json();
    expect(responseBody.data.first_name).toBe("Janet");
    expect(responseBody.support.text).toBe("To keep ReqRes free, contributions towards server costs are appreciated!");
})

test("POST request", async({request})=>{
    const requestTest = await request.post("https://reqres.in/api/users/", {
        data :
            {
                "name": "neo",
                "job": "leader"
            }
        })
        const response = await requestTest.json();
        expect(response.job).toBe("leader");
        expect(response.status).toBe("201");
})

test("POST request - register", async({request})=>{
    const requestTest = await request.post("https://reqres.in/api/register/", {
        data :
        {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
        })
        const response = await requestTest.json();
        console.log(response.token);
})

test("PUT request", async({request})=> {
    let userId = 2;
    const requestTest = await request.put(`https://reqres.in/api/users/${userId}`, {
        data:{
            "name": "Alehandro",
            "job": "Choosen"
        }
    });
    let response = await requestTest.json();
    console.log(response);
    expect(response.name).toBe("Alehandro");
    expect(response.job).toBe("Choosen");
})

test("POST with incorrect email", async({request})=>{
    const requestTest = await request.post('https://reqres.in/api/login', {
        data:{
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
    });
    let respons = await requestTest.json();
    expect(respons.token).toBe("QpwL5tke4Pnpja7X4");
})

test("POST missin password", async({request})=>{
    const requestTest = await request.post('https://reqres.in/api/register', {
        data:{
            "email": "sydney@fife"
        }
    });
    let respons = await requestTest.json();
    expect(respons.error).toBe("Missing password");
})

test("DELETE request", async({request})=> {
    let userId = 2;
    const requestTest = await request.delete(`https://reqres.in/api/users/${userId}`);
    let response = await requestTest.json();
    console.log(response);
    expect(response.status).toBe(204)
})

