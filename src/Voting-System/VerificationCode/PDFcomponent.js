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
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
  Link,
} from "@react-pdf/renderer";
import Logo from "../../assets/Logo.png";
import "./VerificationCode.css";

Font.register({
  family: "Poppins",
  fonts: [
    { src: "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJA.ttf" },
    {
      src: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V1s.ttf",
      fontStyle: "semi-bold",
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    display: "block",
    margin: 70,
    marginTop: 30,
  },
  view: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 20,
    width: "75%",
  },
  imageViewRow: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
    marginBottom: 20,
    fontWeight: 600,
    alignItems: "center",
    width: "75%",
    backgroundColor: "#eef5fb",
  },
  imageViewColumn: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    marginBottom: 20,
    fontWeight: 600,
    width: "75%",
    backgroundColor: "#eef5fb",
  },
  QRImage: {
    width: "30%",
    height: "auto",
  },
  LogoImage: {
    width: "25%",
    height: "auto",
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "semi-bold",
    color: "#0e2842",
    fontSize: 16,
    marginTop: 40,
  },
  subtTitle: {
    fontFamily: "Poppins",
    fontStyle: "semi-bold",
    color: "#0e2842",
    fontSize: 12,
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 10,
    marginTop: 7,
  },
  explanationText: {
    fontFamily: "Poppins",
    fontSize: 10,
    width: "95%",
  },
  codeText: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontStyle: "semi-bold",
    color: "#144b83",
  },
  link: {
    fontFamily: "Poppins",
    fontSize: 10,
  },
});

// Create Document Component
export default function PDFcomponent({ dataURL, code }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.view}>
          <Image src={Logo} style={styles.LogoImage} />
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>
            Your Personal Vote Verification Codes
          </Text>
          <Text style={styles.text}>
            Please use one of the codes below to verify the correctness of your
            vote. You will get notified as soon as the election results are
            available and you can verify your vote.{" "}
          </Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.subtTitle}>Why should I verify my vote?</Text>
          <Text style={styles.text}>
            To ensure the correctness of the voting result in this online
            election, it is important that you verify your vote. Possible
            manipulations can only be detected if as many voters as possible
            verify their vote and report problems. It will take you less than
            two minutes and is completely anonymous.
          </Text>
          <Text style={styles.text}>
            You have two options to verify your vote:
          </Text>
        </View>
        <View style={styles.imageViewRow}>
          <View style={styles.view}>
            <Text style={styles.subtTitle}>Option 1:</Text>
            <Text style={styles.explanationText}>
              You can scan the QR code and check if the displayed voting option
              matches your selection.
            </Text>
          </View>

          <Image src={dataURL} style={styles.QRImage} />
        </View>
        <View style={styles.imageViewColumn}>
          <Text style={styles.subtTitle}>Option 2:</Text>
          <Text style={styles.text}>
            Alternatively, you can go to this website:{" "}
          </Text>
          <Link
            src="https://e-voting-system-1-study.netlify.app/verification"
            style={styles.link}
          >
            https://e-voting-study-1.netlify.app/verification
          </Link>{" "}
          <Text style={styles.text}>
            There you can search for your unique alphanumerical verification code:
          </Text>
          <Text style={styles.codeText}>{code}</Text>
          <Text style={styles.text}>
            Please check that the voting option next to your verification code
            in the table matches your selection.
          </Text>
          <View style={styles.view}></View>
        </View>
      </Page>
    </Document>
  );
}