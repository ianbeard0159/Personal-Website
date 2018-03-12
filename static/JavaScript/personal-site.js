//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './app.js';

//console.log("rendering display window");

//ReactDOM.render(
//  <App />,
//  document.getElementById('display-window')
//);

var about = [
    // Page 1
    '<h1 id = "display-header">About</h1> \
        <p id = "display-text">Page 1</p>',
    // Page 2
    '<h1 id = "display-header">About</h1> \
        <p id = "display-text">Page 2</p>',
    //Page 3
    '<h1 id = "display-header">About</h1> \
        <p id = "display-text">Page 3</p>'];

var skills = [
    // Page 1
    '<h1 id = "display-header">Skills</h1> \
        <p id = "display-text">Page 1</p>',
    // Page 2
    '<h1 id = "display-header">Skills</h1> \
        <p id = "display-text">Page 2</p>',
    //Page 3
    '<h1 id = "display-header">Skills</h1> \
        <p id = "display-text">Page 3</p>'];

var projects = [
    // Page 1
    '<h1 id = "display-header">Projects</h1> \
        <p id = "display-text">Page 1</p>',
    // Page 2
    '<h1 id = "display-header">Projects</h1> \
        <p id = "display-text">Page 2</p>',
    //Page 3
    '<h1 id = "display-header">Projects</h1> \
        <p id = "display-text">Page 3</p>'];

var contact = [
    // Page 1
    '<h1 id = "display-header">Contact</h1> \
        <p id = "display-text">Page 1</p>'];

function change_page(inState, inPage){
    var currentState = [];
    var html = "";

    // Find current state
    if(inState == "About"){
        currentState = about;
    }
    else if(inState == "Skills"){
        currentState = skills;
    }
    else if(inState == "Projects"){
        currentState = projects;
    }
    else{
        currentState = contact;
    }

    // Populate Tabs
    html += '<div class = "left selector tab"></div>';
    for(var i = 0; i < currentState.length; i++){
        if(i == inPage){
            html += '<div class = "large tab"></div>';
        }
        else{
            html += '<div class = "small tab"></div>';
        }
    }
    html += '<div class = "right selector tab"></div>';

    $("#top-tabs").html(html);

    // Populate Display
    $("#display-window").html(currentState[inPage]);

    // Return the number of pages
    return currentState.length;
}

function change_state(inState){
    $("#lable").text(inState);

    numPages = change_page(inState, 0);
    return numPages;
}

$(document).ready(function(){
    console.log("Script Running");
    var state = "About";
    var pages = change_state(state);
    var page = 0;

    // -= If the user hovers over clickable elements =-

    // Side Menu
    $(".clickable").hover(function(){
        $(this).css("text-shadow", "0px 0px 10px white");
    },
    function(){
        $(this).css("text-shadow", "0px 0px 0px white");
    });
    
    // Selectors
    $("#top-tabs").on("mouseenter",".selector" , function(){
        $(this).css("box-shadow", "0px 0px 10px rgb(19, 182, 211)");
    });
    $("#top-tabs").on("mouseleave",".selector" , function(){
        $(this).css("box-shadow", "0px 0px 0px rgb(19, 182, 211)");
    });

    // -= Side Menu Navigation =-
    $(".clickable").click(function(){
        state = $(this).text();
        console.log(state);

        pages = change_state(state);
        page = 0;
    });

    // -= Tab Navigation =-
    $("#top-tabs").on("click",".left.selector" , function(){
        if(page > 0){
            page -= 1;
            change_page(state, page);
        }
    });
    $("#top-tabs").on("click",".right.selector" , function(){
        if(page < (pages - 1)){
            page += 1;
            change_page(state, page);
        }
    });

});