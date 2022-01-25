(function(){
    'use strict';

    async function getData(){
        const shopping = await fetch('data/shop.json');
        const data = await shopping.json();
        document.querySelector('#points1').innerHTML = outputPa(data);
        document.querySelector('#points2').innerHTML = outputPb(data);
        document.querySelector('#points3').innerHTML = outputPc(data);
        document.querySelector('#points4').innerHTML = outputPd(data);
        document.querySelector('#points8').innerHTML = outputPe(data);
    }
    
function outputPa(data){
        let html = '';
        html += `<li>I went shopping on <em>${data.point1.date}</em>.</li>`;
        html += `<li>I bought <em>${data.point1.items}</em> items.</li>`;
        html += `<li>I bought <em>${data.point1.shirts}</em> shirts.</li>`;
        html += `<li>I bought <em>${data.point1.pants}</em> pants.</li>`;
        html += `<li>I bought <em>${data.point1.outerwear}</em> jackets.</li>`;
        html += `<li>I bought <em>${data.point1.other}</em> of other items.</li>`;
        html += `<li>I saved <em>$${data.point1.moneysaved}</em>.</li>`;
        html += `<li>I returned <em>${data.point1.returns}</em> items.</li>`;
        return html;
    };

document.getElementById("May").addEventListener("click", function (change) {
     document.getElementById('points1').style.opacity = "1";
     document.getElementById('points2').style.opacity = "0";
     document.getElementById('points3').style.opacity = "0";
     document.getElementById('points8').style.opacity = "0";
     document.getElementById('points4').style.opacity = "0";
});

function outputPb(data){
        let html = '';
        html += `<li>I went shopping on <em>${data.point2.date}</em>.</li>`;
        html += `<li>I bought <em>${data.point2.items}</em> items.</li>`;
        html += `<li>I bought <em>${data.point2.shirts}</em> shirts.</li>`;
        html += `<li>I bought <em>${data.point2.pants}</em> pants.</li>`;
        html += `<li>I bought <em>${data.point2.outerwear}</em> jackets.</li>`;
        html += `<li>I bought <em>${data.point2.other}</em> of other items.</li>`;
        html += `<li>I saved <em>$${data.point2.moneysaved}</em>.</li>`;
        html += `<li>I returned <em>${data.point2.returns}</em> items.</li>`;
        return html;
};
document.getElementById("July").addEventListener("click", function (change) {
    document.getElementById('points2').style.opacity = "1";
    document.getElementById('points1').style.opacity = "0";
    document.getElementById('points3').style.opacity = "0";
    document.getElementById('points8').style.opacity = "0";
    document.getElementById('points4').style.opacity = "0";
});

function outputPc(data){
    let html = '';
    html += `<li>I went shopping on <em>${data.point3.date}</em>.</li>`;
    html += `<li>I bought <em>${data.point3.items}</em> items.</li>`;
    html += `<li>I bought <em>${data.point3.shirts}</em> shirts.</li>`;
    html += `<li>I bought <em>${data.point3.pants}</em> pants.</li>`;
    html += `<li>I bought <em>${data.point3.outerwear}</em> jackets.</li>`;
    html += `<li>I bought <em>${data.point3.other}</em> of other items.</li>`;
    html += `<li>I saved <em>$${data.point3.moneysaved}</em>.</li>`;
    html += `<li>I returned <em>${data.point3.returns}</em> items.</li>`;
    return html;
};

document.getElementById("September").addEventListener("click", function (change) {
document.getElementById('points3').style.opacity = "1";
document.getElementById('points1').style.opacity = "0";
document.getElementById('points2').style.opacity = "0";
document.getElementById('points8').style.opacity = "0";
document.getElementById('points4').style.opacity = "0";
});

function outputPe(data){
    let html = '';
    html += `<li>I went shopping on <em>${data.point8.date}</em>.</li>`;
    html += `<li>I bought <em>${data.point8.items}</em> items.</li>`;
    html += `<li>I bought <em>${data.point8.shirts}</em> shirts.</li>`;
    html += `<li>I bought <em>${data.point8.pants}</em> pants.</li>`;
    html += `<li>I bought <em>${data.point8.outerwear}</em> jackets.</li>`;
    html += `<li>I bought <em>${data.point8.other}</em> of other items.</li>`;
    html += `<li>I saved <em>$${data.point8.moneysaved}</em>.</li>`;
    html += `<li>I returned <em>${data.point8.returns}</em> items.</li>`;
    return html;
};

document.getElementById("December").addEventListener("click", function (change) {
document.getElementById('points8').style.opacity = "1";
document.getElementById('points1').style.opacity = "0";
document.getElementById('points2').style.opacity = "0";
document.getElementById('points3').style.opacity = "0";
document.getElementById('points4').style.opacity = "0";
});

function outputPd(data){
    let html = '';
    html += `<li>I went shopping on <em>${data.point4.date}</em>, <em>${data.point5.date}</em>, <em>${data.point6.date}</em>, and <em>${data.point7.date}</em> .</li>`;
    html += `<li>I bought <em>${data.point4.items + data.point5.items + data.point6.items + data.point7.items}</em> items.</li>`;
    html += `<li>I bought <em>${data.point4.shirts + data.point5.shirts + data.point6.shirts + data.point7.shirts}</em> shirts.</li>`;
    html += `<li>I bought <em>${data.point4.pants + data.point5.pants + data.point6.pants + data.point7.pants}</em> pants.</li>`;
    html += `<li>I bought <em>${data.point4.outerwear + data.point5.outerwear + data.point6.outerwear + data.point7.outerwear}</em> jackets.</li>`;
    html += `<li>I bought <em>${data.point4.other + data.point5.other + data.point6.other + data.point7.other}</em> of other items.</li>`;
    html += `<li>I saved <em>$${data.point4.moneysaved + data.point5.moneysaved + data.point6.moneysaved + data.point7.moneysaved}</em>.</li>`;
    html += `<li>I returned <em>${data.point4.returns + data.point5.returns + data.point6.returns + data.point7.returns}</em> items.</li>`;
    return html;
};

document.getElementById("November").addEventListener("click", function (change) {
    document.getElementById('points4').style.opacity = "1";
    document.getElementById('points8').style.opacity = "0";
    document.getElementById('points1').style.opacity = "0";
    document.getElementById('points2').style.opacity = "0";
    document.getElementById('points3').style.opacity = "0";
});

    getData();
})()