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
import { Text, Button } from "@chakra-ui/react";
import "./InfoPages.css";
import { useNavigate } from "react-router-dom";

export default function Info2() {
const navigate = useNavigate();
  return (
    <div className="container-info-pages">
      <div className="inner-box-info centered-info-page">
        <h2 className="h2-info-pages">
          You have completed the first part of the study!
        </h2>
        <Text className="medium-body-text-info">
          If this was a real election, the votes would now be counted and it
          would take some time before you could check the result on the official
          website.
        </Text>
        <Text className="medium-body-text-info">
          However, since this is a study, the results are already up. {/* Please
          follow the instruction letter to verify your vote now! */}
        </Text>
        <Button textColor="white" onClick={()=>navigate("/verification")} className="red-btn">Next</Button>
      </div>
    </div>
  );
}