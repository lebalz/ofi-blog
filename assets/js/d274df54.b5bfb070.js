"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[82841],{75101:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return _}});var o=t(83117),r=t(80102),a=(t(67294),t(3905)),s=t(84384),i=["components"],p={},l="Planeten mit Monden",d={unversionedId:"snippets/turtle-planets",id:"snippets/turtle-planets",title:"Planeten mit Monden",description:"",source:"@site/docs/snippets/turtle-planets.md",sourceDirName:"snippets",slug:"/snippets/turtle-planets",permalink:"/snippets/turtle-planets",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/snippets/turtle-planets.md",tags:[],version:"current",lastUpdatedAt:1634080030,formattedLastUpdatedAt:"10/12/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"Phaser",permalink:"/snippets/python-phaserjs"},next:{title:"1. Begriff",permalink:"/Codes-and-Data/Codierung/Begriff"}},m=[],u={toc:m};function _(e){var n=e.components,p=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,p,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"planeten-mit-monden"},"Planeten mit Monden"),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(90381).Z,mdxType:"Image"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=planeten.py id=877367b1-83df-418d-8f7b-1bc5534e0279",live_py:!0,title:"planeten.py",id:"877367b1-83df-418d-8f7b-1bc5534e0279"},"import turtle as t\nfrom math import sin, cos, pi\n\n# parameter\nRADIUS_earth_pos = [120, 100]\nRADIUS_MOON = [20, 25]\nRADIUS_MOON2 = [34, 28]\n\n# speed factor relative to the earth...\nMOON_SPEED = 14.3871\nMOON_SPEED2 = 18.913\nSTEPS = 400\nROUNDS = 2\nTURTLE_SPEED = 10\n\n# create turtles\nsun = t.Turtle('turtle')\nearth = t.Turtle('circle')\nmoon = t.Turtle()\nmoon2 = t.Turtle()\n\n# setup turtles\nsun.speed(-1) # max speed\nearth.speed(TURTLE_SPEED)\nmoon.speed(TURTLE_SPEED)\nmoon2.speed(TURTLE_SPEED)\n\n# set initial position, without drawing\nearth.penup()\nmoon.penup()\nmoon2.penup()\nearth.goto(RADIUS_earth_pos[0], 0)\nmoon.goto(RADIUS_earth_pos[0] + RADIUS_MOON[0], 0)\nmoon2.goto(RADIUS_earth_pos[0], -RADIUS_MOON2[1])\nmoon2.pendown()\nmoon.pendown()\n\ndef to_degree(rad):\n  return 360 * rad / 2.0 / pi\n\nfor step in range(STEPS * ROUNDS):\n  angle = 2 * pi * step / STEPS\n  sun.setheading(to_degree(angle) * 3)\n  earth_pos = [cos(angle) * RADIUS_earth_pos[0], sin(angle) * RADIUS_earth_pos[1]]\n  earth.goto(earth_pos[0], earth_pos[1])\n  earth.setheading(to_degree(angle) + 90)\n\n  angle_moon = angle * MOON_SPEED\n  rel_moon = [cos(angle_moon) * RADIUS_MOON[0], sin(angle_moon) * RADIUS_MOON[1]]\n  moon.goto(earth_pos[0] + rel_moon[0], earth_pos[1]  + rel_moon[1])\n  moon.setheading(to_degree(angle_moon) + 90)\n\n  angle_moon2 = angle * MOON_SPEED2\n  rel_moon2 = [sin(angle_moon2) * RADIUS_MOON2[0], cos(angle_moon2) * RADIUS_MOON2[1]]\n  moon2.goto(earth_pos[0] - rel_moon2[0], earth_pos[1]  - rel_moon2[1])\n  moon2.setheading(180 - to_degree(angle_moon2))\n\n# hide turtles\nsun.hideturtle()\nearth.hideturtle()\nmoon.hideturtle()\nmoon2.hideturtle()\n")))}_.isMDXComponent=!0},90381:function(e,n,t){n.Z=t.p+"assets/images/turtle-planets-dcb9ef5b63ba0c85a2e8ee85c61ca05a.svg"}}]);