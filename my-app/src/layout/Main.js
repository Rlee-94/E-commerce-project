import Agent from "../components/Agent";
import CloudSync from "../components/CloudSync";
import Collaboration from "../components/Collaboration";
import Shield from "../components/Shield";
import Card from "../components/Card";

export default function Main() {
  return (
    <main className="main">
      <Card
        Icon={CloudSync}
        title={"Automatic Cloud Sync and Backup"}
        text={
          "Our automatic cloud sync will scan and backup your data. Each user can have up to 5TB of storage"
        }
      />
      <Card
        Icon={Agent}
        title={"24/7 Customer Service Support"}
        text={
          "24/7 support 365 days a year. We love to make sure our customers are happy and their needs are met."
        }
      />
      <Card
        Icon={Collaboration}
        title={"Seamless Collaboration Between Users"}
        text={
          "BRAND allows seamless collaboration between services such as OneDrive, DropBox, iCloud, GoogleDocs, and more "
        }
      />
      <Card
        Icon={Shield}
        title={"24/7 Realtime Protection"}
        text={
          "Files uploaded to BRAND are scanned for any traces of malware during sync and during file transfers for collaboration."
        }
      />
    </main>
  );
}
