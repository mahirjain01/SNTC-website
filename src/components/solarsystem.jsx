import React, { useEffect, useRef } from 'react';
import $ from 'jquery'; 
import './SolarSystem.css';

const SolarSystem = () => {
  
    useEffect(() => {
      const init = () => {
        $("body")
          .removeClass('view-2D opening')
          .addClass("view-3D")
          .queue(function () {
            $(this).removeClass('hide-UI').addClass("set-link");
            $(this).dequeue();
          });
      };
  
      $("#toggle-data").on("click", function (e) {
        $("body").toggleClass("data-open data-close");
        e.preventDefault();
      });
  
      $("#toggle-controls").on("click", function (e) {
        $("body").toggleClass("controls-open controls-close");
        e.preventDefault();
      });
  
      $("#data a").on("click", function (e) {
        const ref = $(this).attr("class");
        $("#solar-system").removeClass().addClass(ref);
        $("#data a").removeClass('active');
        $(this).addClass('active');

        e.preventDefault();
      });
  
      $(".set-view").on("click", function () {
        $("body").toggleClass("view-3D view-2D");
      });
      $(".set-zoom").on("click", function () {
        $("body").toggleClass("zoom-large zoom-close");
      });
     
      init();

      return () => {
        $("body").removeClass('view-3D').addClass("view-2D");
      };
    }, []); 

    const planetInfo = {
        SNTC: 'Information about SNTC...',
        Stac: 'Information about Stac...',
        KBG: 'Information about KBG...',
        KamandPrompt: 'Information about KamandPrompt...',
        RobotronicsClub: 'Information about RobotronicsClub...',
        Yantrik: 'Information about Yantrik...',
        Nirmaan: 'Information about Nirmaan...',
        ECell: 'Information about ECell...',
      };

  return (
    <div>
      <div id="navbar">
        <a id="toggle-data" href="#data"><i className="icon-data"></i>Data</a>
        <a id="toggle-controls" href="#controls"><i className="icon-controls"></i>Controls</a>
      </div>
      <div id="data">
        <a className="SNTC" title="SNTC" href="#SNTClink">SNTC</a>
        <a class="Stac" title="Stac" href="#Staclink">Stac</a>
        <a class="KBG" title="KBG" href="#KBGlink">KBG</a>
        <a class="KamandPrompt active" title="KamandPrompt" href="#KamandPromptlink">KamandPrompt</a>
        <a class="RobotronicsClub" title="RobotronicsClub" href="#RobotronicsClublink">RobotronicsClub</a>
        <a class="Yantrik" title="Yantrik" href="#Yantriklink">Yantrik</a>
        <a class="Nirmaan" title="Nirmaan" href="#Nirmaanlink">Nirmaan</a>
        <a class="ECell" title="ECell" href="#ECelllink">ECell</a>
      </div>
      <div id="controls">
        <label className="set-view">
          <input type="checkbox" />
        </label>
        <label class="set-zoom">
            <input type="checkbox" />
        </label>
      </div>
      <div id="universe" class="scale-stretched">
        <div id="galaxy">
            <div id="solar-system" class="KamandPrompt">
                <div id="Stac" class="orbit">
                    <div class="pos">
                    <div class="planet">
                        <dl class="infos">
                        <dt>Stac</dt>
                        <dd><span></span></dd>
                        </dl>
                    </div>
                    </div>
                </div>
                <div id="KBG" class="orbit">
                    <div class="pos">
                    <div class="planet">
                        <dl class="infos">
                        <dt>KBG</dt>
                        <dd><span></span></dd>
                        </dl>
                    </div>
                    </div>
                </div>
            <div id="KamandPrompt" class="orbit">
                <div class="pos">
                <div class="orbit">
                    <div class="pos">
                    <div class="moon">

                    </div>
                </div>
                </div>
                <div class="planet">
                    <dl class="infos">
                    <dt>KamandPrompt</dt>
                    <dd><span></span></dd>
                    </dl>
                </div>
                </div>
            </div>
            <div id="RobotronicsClub" class="orbit">
                <div class="pos">
                <div class="planet">
                    <dl class="infos">
                    <dt>RobotronicsClub</dt>
                    <dd><span></span></dd>
                    </dl>
                </div>
                </div>
            </div>
            <div id="Yantrik" class="orbit">
                <div class="pos">
                <div class="planet">
                    <dl class="infos">
                    <dt>Yantrik</dt>
                    <dd><span></span></dd>
                    </dl>
                </div>
                </div>
            </div>
            <div id="Nirmaan" class="orbit">
                <div class="pos">
                <div class="planet">
                    <div class="ring"></div>
                    <dl class="infos">
                    <dt>Nirmaan</dt>
                    <dd><span></span></dd>
                    </dl>
                </div>
                </div>
            </div>
            <div id="ECell" class="orbit">
                <div class="pos">
                <div class="planet">
                    <dl class="infos">
                    <dt>ECell</dt>
                    <dd><span></span></dd>
                    </dl>
                </div>
                </div>
            </div>
            <div id="SNTC">
                <dl class="infos">
                <dt>SNTC</dt>
                <dd><span></span></dd>
                </dl>
            </div>
        </div>
    </div>
        </div>
    </div>
  );
};

export default SolarSystem;

