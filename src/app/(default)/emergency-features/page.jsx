import React from "react";
import SafetyHeader from './../../../components/emergency/safetyHeader'
import AdditionalSafety from './../../../components/emergency/additionalSafety'
import EmergencyBuddySystem from './../../../components/emergency/emergencyBuddySystem'
export default function page() {
  return (
    <div>
    <SafetyHeader/>
    <EmergencyBuddySystem/>
    <AdditionalSafety/>

    </div>
  );
}
