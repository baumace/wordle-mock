import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import Picks from "../Picks.json";
import "./Settings.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Settings() {
  const {
    popupActive,
    setPopupActive,
    selectPlayer,
    filterData,
    resetBoard,
    selectedEra,
    setSelectedEra,
  } = useContext(AppContext);
  const [dropdownActive, setDropdownActive] = useState({ active: false });
  const eraYears = [
    "All Years",
    "2010-Pres.",
    "2000-2009",
    "1990-1999",
    "1980-1989",
    "1968-1979",
  ];

  const handleExitClick = () => {
    setDropdownActive({ active: false });
    setPopupActive({ settings: false });
  };

  const handleDropdownClick = () => {
    if (dropdownActive.active) {
      setDropdownActive({ active: false });
    } else {
      setDropdownActive({ active: true });
    }
  };

  const handleNewPlayerClick = () => {
    // Is the era set to include all picks?
    if (selectedEra.era == 0) {
      // Select a player
      selectPlayer(Picks);
    } else {
      // Select the player based on the new filter
      selectPlayer(filterData());
    }

    // Quit from the settings menu
    handleExitClick();
  };

  const handleDropdownItemClick = (id) => {
    // Is the id equal to the already selected era?
    if (id != selectedEra.era) {
      // Change selected era depending on id
      switch (id) {
        // Change to all eras
        case 0:
          setSelectedEra({ era: 0 });
          break;
        // Change to 2010-Pres.
        case 1:
          setSelectedEra({ era: 1 });
          break;
        // Change to 2000-2009
        case 2:
          setSelectedEra({ era: 2 });
          break;
        // Change to 1990-1999
        case 3:
          setSelectedEra({ era: 3 });
          break;
        // Change to 1980-1989
        case 4:
          setSelectedEra({ era: 4 });
          break;
        // Change to 1968-1979
        case 5:
          setSelectedEra({ era: 5 });
          break;
      }

      // Toggle the dropdown content
      handleDropdownClick();
    }
  };

  return (
    <div className="settings" id={popupActive.settings ? "show" : "hide"}>
      <button
        className="exitButton"
        id="settingsExit"
        onClick={() => {
          handleExitClick();
        }}
      >
        X
      </button>
      <div
        className="newPlayerButton"
        onClick={() => {
          handleNewPlayerClick();
        }}
      >
        <p>NEW PLAYER</p>
      </div>
      <div
        className="resetBoardButton"
        onClick={() => {
          resetBoard();
          handleExitClick();
        }}
      >
        <p>RESET BOARD</p>
      </div>
      <div className="eraDropdown">
        <p>Selected Years:</p>
        <div
          className="eraDropdownButton"
          onClick={() => {
            handleDropdownClick();
          }}
        >
          <p>{eraYears[selectedEra.era]}</p>
        </div>

        <div
          className="eraDropdownContent"
          id={dropdownActive.active ? "show" : "hide"}
        >
          <div
            className="eraDropdownItem"
            onClick={() => {
              handleDropdownItemClick(0);
            }}
          >
            <p>{eraYears[0]}</p>
          </div>
          <div
            className="eraDropdownItem"
            onClick={() => {
              handleDropdownItemClick(1);
            }}
          >
            <p>{eraYears[1]}</p>
          </div>
          <div
            className="eraDropdownItem"
            onClick={() => {
              handleDropdownItemClick(2);
            }}
          >
            <p>{eraYears[2]}</p>
          </div>
          <div
            className="eraDropdownItem"
            onClick={() => {
              handleDropdownItemClick(3);
            }}
          >
            <p>{eraYears[3]}</p>
          </div>
          <div
            className="eraDropdownItem"
            onClick={() => {
              handleDropdownItemClick(4);
            }}
          >
            <p>{eraYears[4]}</p>
          </div>
          <div
            className="eraDropdownItem"
            onClick={() => {
              handleDropdownItemClick(5);
            }}
          >
            <p>{eraYears[5]}</p>
          </div>
        </div>
        {dropdownActive.active ? (
          <KeyboardArrowDownIcon
            className="dropdownArrowIcon"
            onClick={() => {
              handleDropdownClick();
            }}
          />
        ) : (
          <KeyboardArrowUpIcon
            className="dropdownArrowIcon"
            onClick={() => {
              handleDropdownClick();
            }}
          />
        )}
      </div>
      <div className="settingsText"></div>
    </div>
  );
}

export default Settings;
