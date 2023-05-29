import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Contact = () => {
    const containerStyle = {
        width: '700px',
        height: '750px'
      };
      
      const center = {
        lat: -3.745,
        lng: -38.523
      };
      const REACT_APP_GOOGLE_MAPS_API_KEY= "AIzaSyDJ4vvbz3JikGjYQ92HY7yymxXtt6Kq5a0"
  return (
    <div className="flex font-roboto">
      <div className="flex flex-col w-full  items-center mt-16">
        <div>
          <div className="w-72 flex items-center">
            <img
              className="w-6"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEElEQVR4nO3UPS9EQRTG8Z+XiEQoVBL7YSRaKjodHZ3GV1Aolbai0+lU2i1pVHyA/QLeWVk5Jte1V3bYVWzuPzm5c2fOPM/N3DmHmppRZgGX6AwprtEomy7Hcx6tIZi2Qrvo9cEj1mM8g/MBml5gLrRXcV807ia8YDPep3A6ANMzTIfmBp5j/otxN96wG3MTOPqD6TEmQ2sHr4W1b8afsR/zYzj4hekhxkNjr8d6pXE/m6uin49OVImcFI5ru3Rc5Sj/puYPuYmcC/LUIyf3Yib6KYnZyF3BXWHtAWuZpZjIbQJLuMVNjHObTyKn7S3q3W6vMnQSOaXSxlb03UaM25kaic4/R6I27oz8UdfUjA7vZuyuMsipCFsAAAAASUVORK5CYII="
            />
            <h1 className="ml-5"> yesari.yesair@gmail.com </h1>
          </div>
          <div className="w-72 flex items-center mt-6">
            <img
              className="w-6"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBUlEQVR4nO2ZQUtUURTHf1NWguimcBqjIFpZLUNchtiuaCMGBkNg9RECP0G0s1aT38CFqJVGMYsKBmFa2ASWUZAErbQZioyo4MmF+zZDM75zH+++8+D94L8cmB/3vnvPORdyclLlKlAHfgCvgVEyxiGgAgRtaQEnyAj9wOp/JMKskAGGgI0uEmHKKKYIfIggYdIESijkMFCLKBFmGYXMCCXCXEcZW44iO8BxFPHTUcRkAUV8jCFicg0lLMQU2UQJt2OK/EIJg8C/GCJrKKIaQ6SsrdINHPIGOIAiCkDDQeQSCpkUSjxCKQXglUBkGsWcA/4IquAzKOaeYFXWgT6UcsT+wagyVfsblZwFdgUyi0APSrklPMXm7IGhkopQZhbFo6EXQpn7WlemCHxy2GYHUcgp4ItQZgnoRSHngW9CmWcd7hmzWjfsKPYv8N6WSN4YsbNgiUyjrQIY63JPPbaDQi+MA7+FMk1bmz2JOJ2Z8tm/SGUCh2+s5EPmosM2k6ZlZwqJcwHYTlgmAJ4CJ32U/l89yLTsYZMopx0uTZfU8TRWknSYLvmOxyeKhwmK1PDMTWE/E0TMZVJgWNhpBvvkASliWuC7goFG0OX4VdGBmiP6paPEW2AARZhma0K43d7ZfkglRugK8NyW8EGHmKP8GBnhqK2K5+2DkXkG/AzcsW12Tg4psAf86ZgqZsaVBAAAAABJRU5ErkJggg=="
            />
            <h1 className="ml-5"> +90 555 555 22 11 </h1>
          </div>
          <div className="w-72 flex items-center mt-6">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABlUlEQVR4nNWWu0oDQRSGPysRQbwUIioW4guISpD4ABZa2dilEAuNLyC+gPgEghAUCxFEEImtWCpiJYqV4AOIq7FJjHJgAoPszmV3NpAPBmZ35pz/n5k9uwsdxjhQBq6AJ+BLNelXgU1gLA/hUWAfqAO/lvYDnAITocSXgchB+H+TmKWs4ltqRb7i+m7IkaViEWhkENdNyC56n3lkSfwITAMzqm+a+wGM+Bg4sCQ8Anq1+T3qITXFyLhzqTUSktSAkja3FHNdS4itq521UjasoqDmyOor2v2KtiMFQ/yGi4GqIUGLuDOXey2S4i9dDLw4GEg7/uxiIPIQmAeKHgYkt5VPDwO267hytPKQo4F7FwN7DgZsJMXvugRPGd7/ct42FhJiJeek6wouDKtI287xoAg0A4o3VcV4cRzQwCEpGAbeA4h7fwl11gMYWCMjJxnEzwhAP/CaQvwNGCQQc8C3h7jMnSUwK44/qFJyq+TEjoOBbXKkS/0PBq13X7qBmxjxazXWFvqAO01cPuEDtJkhZeJW9TuTP7QbqspxGRsVAAAAAElFTkSuQmCC" />
            <h1 className="ml-5"> Geçiçi Adres </h1>
          </div>
        </div>

        {/* İnput alanları */}
        <div className="w-full flex flex-col justify-center items-center mt-24">
            <h1 className="w-72 text-primary font-bold text-[36px]"> Bize Ulaşın </h1>
            <div className="w-72 justify-center items-center mt-10">
                <div>
                    <label className="ml-2  tracking-wider"> İsminiz </label>
                </div>
                <input className="w-96 h-10 border border-primary rounded-xl pl-[5px] pt-[2px] mt-1" type="text" name="name" id="name" placeholder="İsminiz" />
            </div>
            <div className="w-72 mt-5">
                <div>
                    <label className="ml-2  tracking-wider"> Email </label>
                </div>
                <input className="w-96 h-10 border border-primary rounded-xl pl-[5px] pt-[2px] mt-1" type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="w-72 mt-5">
                <div>
                    <label className="ml-2  tracking-wider"> Mesajınız </label>
                </div>
                <textarea className="border border-primary rounded-xl pl-[5px] pt-[2px] mt-1" type="text" name="message" id="message" placeholder="Mesajınız" cols="70" rows="8"/>
            </div>
            <div className="w-72 justify-center items-center mt-5">
                <button className="w-60 h-8 rounded-xl text-[18px] tracking-widest bg-primary text-white "> Gönder </button>
            </div>
        </div>
      </div>

        {/* Map kısmı  */}

      <div className="mt-16 mr-36">
      <LoadScript
        googleMapsApiKey={REACT_APP_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <></>
        </GoogleMap>
      </LoadScript>
      </div>
    </div>
  );
};

export default Contact;
