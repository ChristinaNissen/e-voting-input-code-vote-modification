/**
 * Copyright 2023 Christina Frederikke Nissen, Elisabeth Fredrich
 *
 * This file is part of e-voting-system-self-replace.
 *
 * e-voting-system-self-replace is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * e-voting-system-self-replace is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with e-voting-system-self-replace. If not, see <https://www.gnu.org/licenses/>.
 */

import React from "react";
import {
  Button,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import getCurrentUser from "../API/Voter";
import { CopyIcon } from "@chakra-ui/icons";
import "./InfoPages.css";

export default function Info3() {
  const voter = getCurrentUser();

  function copyIdToClipBoard() {
    navigator.clipboard.writeText(voter.attributes.username);
  }
  return (
    <div className="container-info-pages">
      <div className="inner-box-info centered-info-page">
        <h2 className="h2-info-pages">Please tell us about your experience</h2>
         <Text className="medium-body-text-info">
          Congratulations! You have finished the voting system.
        </Text> 

        <Text className="medium-body-text-info">
          To complete the study, please fill out a survey about your experience
          of the online voting system.
        </Text>

        <Text className="medium-body-text-info">
          We need to be able to connect your results from the voting system with
          the survey. Therefore, you have to copy the number just below and
          paste into survey as the very first thing, after you click the button
          below.
        </Text>

        <InputGroup size="md" mt={"2rem"} width="80%">
          <Input
            pr="4.5rem"
            value={voter.attributes.username}
            className={"input-field-code"}
          />
          <InputRightElement width="4.5rem">
            <IconButton
              color="white"
              className="copy-button"
              size="sm"
              onClick={copyIdToClipBoard}
              icon={<CopyIcon />}
            />
          </InputRightElement>
        </InputGroup>

        <Button
          textColor="white"
          marginTop={"2rem"}
          width="8rem"
          className="red-btn"
          onClick={() =>
            (window.location.href =
              "https://www.survey-xact.dk/LinkCollector?key=C7LXSJLQLP9J&System=2.0")
          }
        >
          Go to survey
        </Button>
      </div>
    </div>
  );
}