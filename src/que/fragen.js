ulist = [{
            text: "Verwenden Sie kabellose Eingabgeräte?", 
            optional: "Kabellose Tastaturen und Mäuse können von Angreifern abgehört und manipuliert werden. Dadurch können sensible Daten mitgelesen werden oder schadhafte Befehle in das System eingegeben werden.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "https://www.itk-security.de/funktastaturen-und-maeuse-sind-nicht-sicher-aus-die-maus/", next: [1]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [1]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "https://www.itk-security.de/funktastaturen-und-maeuse-sind-nicht-sicher-aus-die-maus/", next: [1]}
            ]
        },
{
            text: "Müssen Daten auf externen Datenträgern gespeichert werden (z.B. Backups)?", 
            optional: "Unverschlüsselte Datenträger stellen bei Diebstahl oder Verlust ein hohes Risiko dar. Außerdem fordern einige Gesetze Verschlüsselung.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["Bitlocker, Veracrypt, Androidsystemverschlüsselung, "], optional: "https://www.it-techblog.de/darum-ist-eine-gute-verschluesselung-wichtig/12/2017/", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["Bitlocker, Veracrypt, Androidsystemverschlüsselung, "], optional: "https://www.it-techblog.de/darum-ist-eine-gute-verschluesselung-wichtig/12/2017/", next: []}
            ]
        },
{
            text: "Haben sie vor private Geräte an ihr Firmengerät anzuschließen?", 
            optional: "Eigene Geräte können maliziöse Aktionen auf dem System ausführen.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Ist ihr Gerät verschlüsselt? (nicht verwechseln mit Bildschirmcode/PW)", 
            optional: "Unverschlüsselte Datenträger stellen bei Diebstahl oder Verlust ein hohes Risiko dar. Außerdem fordern einige Gesetze Verschlüsselung.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["Bitlocker, Veracrypt, Androidsystemverschlüsselung, "], optional: "https://support.microsoft.com/de-de/help/4028713/windows-10-turn-on-device-encryption", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["Bitlocker, Veracrypt, Androidsystemverschlüsselung, "], optional: "https://support.microsoft.com/de-de/help/4028713/windows-10-turn-on-device-encryption", next: []}
            ]
        },
{
            text: "Ist die verwendete Software (Browser, Betriebssystem, etc.) auf dem aktuellsten Stand?", 
            optional: "Veraltete Softwareversionen können Schwachstellen enthalten über die ein Angreifer in das System eindringen kann.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["Windows 10
Chrome
Firefox
Outlook"], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/EinrichtungSoftware/UpdatePatchManagement/LeitfadenUpdatemanagement/leitfadenUpdateManagement_node.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["Windows 10
Chrome
Firefox
Outlook"], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/EinrichtungSoftware/UpdatePatchManagement/LeitfadenUpdatemanagement/leitfadenUpdateManagement_node.html", next: []}
            ]
        },
{
            text: "Kann Ihr Bildschirm von anderen unberechtigt eingesehen werden?", 
            optional: "Ein Angreifer könnte schützenswerte Informationen ausspähen.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "https://www.haufe.de/compliance/management-praxis/datenschutz-bei-notebooks-durch-blickschutzfilter_230130_278940.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "https://www.haufe.de/compliance/management-praxis/datenschutz-bei-notebooks-durch-blickschutzfilter_230130_278940.html", next: []}
            ]
        },
{
            text: "Lagern Sie zuhause schützenswerte Informationen/Gegenstände?", 
            optional: "Unverschlüsselte Informationen können durch einen Einbruch verloren gehen.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "https://www.ndr.de/ratgeber/verbraucher/Einbruchschutz-So-werden-Haus-und-Wohnung-sicherer,einbruchschutz130.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "https://www.ndr.de/ratgeber/verbraucher/Einbruchschutz-So-werden-Haus-und-Wohnung-sicherer,einbruchschutz130.html", next: []}
            ]
        },
{
            text: "Wie kann ich mein Gerät im unbenutzen Zustand schützen?", 
            optional: "Nicht gesperrte Systeme ermöglichen unberechtigten Zugriff auf das System. Ein Angreifer kann so Zugriff auf schützenswerte Informationen erlangen oder schadhafte Befehle ausführen.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["[Win] + L"], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["[Win] + L"], optional: "", next: []}
            ]
        },
{
            text: "Führen Sie auch Firmentelefonate zuhause?", 
            optional: "Über mithörende Geräte könnten schützenswerte Informationen mitgeschnitten werden.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Verwenden Sie Geräte die Bild- oder Tonaufzeichnen können (z.B. GoogleHome, Amazon Alexa, Babyphones)", 
            optional: "Falsch konfigurierte Kameras können schützenswerte Informationen im Internet veröffentlichen.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "https://www.heise.de/newsticker/meldung/Googles-Sprachassistent-Mitarbeiter-hoeren-und-bewerten-Audioaufnahmen-4467985.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "https://www.heise.de/newsticker/meldung/Googles-Sprachassistent-Mitarbeiter-hoeren-und-bewerten-Audioaufnahmen-4467985.html", next: []}
            ]
        },
{
            text: "Arbeiten Sie mit ihrem privaten Computer?", 
            optional: "Je höher die Rechte des Benutzeraccount sind desto größer ein potentieller Schaden, der durch eine Komprommitierung entsteht.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Setzen Sie Antivirussoftware ein?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Schutzprogramme/Virenschutzprogramme/virenschutzprogramme_node.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Schutzprogramme/Virenschutzprogramme/virenschutzprogramme_node.html", next: []}
            ]
        },
{
            text: "Surfen Sie mit ihrem Arbeitsgerät?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Müssen Sie auf Dateien aus dem Firmennetzwerk zugreifen?", 
            optional: "Ein VPN Tunnel bieter sicheren Zugriff auf das Firmennetzwerk.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["OpenVPN, Wireguard"], optional: "https://www.bsi.bund.de/DE/Themen/StandardsKriterien/ISi-Reihe/ISi-VPN/vpn_node.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["OpenVPN, Wireguard"], optional: "https://www.bsi.bund.de/DE/Themen/StandardsKriterien/ISi-Reihe/ISi-VPN/vpn_node.html", next: []}
            ]
        },
{
            text: "Müssen Sie Dateien mit Kollegen austauschen?", 
            optional: "Durch einen selbstbetriebenen Cloudspeicher behält man die Kontrolle wo die Daten gespeichert werden.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["Nextcloud, Protonmail"], optional: "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Mindeststandards/Mindeststandard_Mitnutzung_externer_Cloud-Dienste.pdf?__blob=publicationFile&v=8", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["Nextcloud, Protonmail"], optional: "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Mindeststandards/Mindeststandard_Mitnutzung_externer_Cloud-Dienste.pdf?__blob=publicationFile&v=8", next: []}
            ]
        },
{
            text: "Verschicken Sie Dokumente an Personen außerhalb der Firma?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "https://support.office.com/de-de/article/entfernen-von-ausgeblendeten-daten-und-pers%C3%B6nlichen-informationen-durch-pr%C3%BCfen-von-dokumenten-pr%C3%A4sentationen-oder-arbeitsmappen-356b7b5d-77af-44fe-a07f-9aa4d085966f", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "https://support.office.com/de-de/article/entfernen-von-ausgeblendeten-daten-und-pers%C3%B6nlichen-informationen-durch-pr%C3%BCfen-von-dokumenten-pr%C3%A4sentationen-oder-arbeitsmappen-356b7b5d-77af-44fe-a07f-9aa4d085966f", next: []}
            ]
        },
{
            text: "Müssen Sie E-Mails verschicken?", 
            optional: "E-Mails sind standardmäßig unverschlüsselt und daher kein sicheres Kommunikationsmittel.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["Protonmail"], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Verschluesselung/EMail_Verschluesselung/email_verschluesselung_node.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["Protonmail"], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Verschluesselung/EMail_Verschluesselung/email_verschluesselung_node.html", next: []}
            ]
        },
{
            text: "Was tun wenn mir eine Email verdächtig vorkommt?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Müssen sie mit Kollegen telefonieren (Sprache/Video)?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["Skype for Business
Discord
Zooom"], optional: "https://www.bsi.bund.de/DE/Themen/StandardsKriterien/ISi-Reihe/ISi-VoIP/voip_node.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["Skype for Business
Discord
Zooom"], optional: "https://www.bsi.bund.de/DE/Themen/StandardsKriterien/ISi-Reihe/ISi-VoIP/voip_node.html", next: []}
            ]
        },
{
            text: "Müssen Sie mit Kollegen kolloborativ zusammen arbeiten?", 
            optional: "Es gibt spezielle Onlinedienste, die sich auf gemeinsames Arbeiten spezialisiert haben.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["GoogleDocs, NextCloud"], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["GoogleDocs, NextCloud"], optional: "", next: []}
            ]
        },
{
            text: "Gibt es eine Multifaktorauthentifizierung?", 
            optional: "Mulitfaktorauthentifizierung erhöht die Sicherheit, falls ein Authentifizierungsmerkmal eines Mitarbeiters komprommitiert wurde.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Besitzen Sie mehr Zugriffsrechte als Sie benötigen?", 
            optional: "Zu Hohe Rechte erhöhen das Risko von Missbrauch bzw. des Schadenpotentials",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Besitzen Sie geheime Zugangsdaten (digitale Schlüssel, Passwörter etc.)", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Brauchen Sie Zugriff auf das Firmennetzwerk?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Wissen Sie was zutun ist im Falle eines Sicherheitsverstoßes oder Verlust?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Wie verhalte ich mich auf den sozialen Medien?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Tauschen Sie sich oft über aktuelle Sicherheitsstandards aus? ", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Ist ihr Netzwerk vor ungeschütztem Zugriff gesichert?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        }] 
alist = [{
            text: ".", 
            optional: "Unverschlüsselte Datenträger stellen bei Diebstahl oder Verlust ein hohes Risiko dar. Außerdem fordern einige Gesetze Verschlüsselung.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["Bitlocker, Veracrypt, Androidsystemverschlüsselung, "], optional: "https://www.it-techblog.de/darum-ist-eine-gute-verschluesselung-wichtig/12/2017/", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["Bitlocker, Veracrypt, Androidsystemverschlüsselung, "], optional: "https://www.it-techblog.de/darum-ist-eine-gute-verschluesselung-wichtig/12/2017/", next: []}
            ]
        },
{
            text: "Können die Mitarbeiter private Geräte anschließen?", 
            optional: "Eigene Geräte können maliziöse Aktionen auf dem System ausführen.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Sind die Arbeitsgeräte verschlüsselt?", 
            optional: "Unverschlüsselte Datenträger stellen bei Diebstahl oder Verlust ein hohes Risiko dar. Außerdem fordern einige Gesetze Verschlüsselung.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["Bitlocker, Veracrypt, Androidsystemverschlüsselung, "], optional: "https://support.microsoft.com/de-de/help/4028713/windows-10-turn-on-device-encryption", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["Bitlocker, Veracrypt, Androidsystemverschlüsselung, "], optional: "https://support.microsoft.com/de-de/help/4028713/windows-10-turn-on-device-encryption", next: []}
            ]
        },
{
            text: "Ist die eingesetzt Software (Browser, Betriebssystem, etc.) auf dem aktuellsten Stand?", 
            optional: "Veraltete Softwareversionen können Schwachstellen enthalten über die ein Angreifer in das System eindringen kann.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["Windows 10
Chrome
Firefox
Outlook"], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/EinrichtungSoftware/UpdatePatchManagement/LeitfadenUpdatemanagement/leitfadenUpdateManagement_node.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["Windows 10
Chrome
Firefox
Outlook"], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/EinrichtungSoftware/UpdatePatchManagement/LeitfadenUpdatemanagement/leitfadenUpdateManagement_node.html", next: []}
            ]
        },
{
            text: "Kann der Bildschirm ihrer Mitarbeiter von anderen unberechtigt eingesehen werden?", 
            optional: "Ein Angreifer könnte schützenswerte Informationen ausspähen.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "https://www.haufe.de/compliance/management-praxis/datenschutz-bei-notebooks-durch-blickschutzfilter_230130_278940.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "https://www.haufe.de/compliance/management-praxis/datenschutz-bei-notebooks-durch-blickschutzfilter_230130_278940.html", next: []}
            ]
        },
{
            text: "Setzen Sie Antivirussoftware ein?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Schutzprogramme/Virenschutzprogramme/virenschutzprogramme_node.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Schutzprogramme/Virenschutzprogramme/virenschutzprogramme_node.html", next: []}
            ]
        },
{
            text: "Surfen ihre Mitarbeiter  mit ihren Geräten?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Müssen Ihre Mitarbeiter auf Dateien aus dem Firmennetzwerk zugreifen?", 
            optional: "Ein VPN Tunnel bieter sicheren Zugriff auf das Firmennetzwerk.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["OpenVPN, Wireguard"], optional: "https://www.bsi.bund.de/DE/Themen/StandardsKriterien/ISi-Reihe/ISi-VPN/vpn_node.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["OpenVPN, Wireguard"], optional: "https://www.bsi.bund.de/DE/Themen/StandardsKriterien/ISi-Reihe/ISi-VPN/vpn_node.html", next: []}
            ]
        },
{
            text: "Müssen Ihre Mitarbeiter Dateien undeinerander austauschen?", 
            optional: "Durch einen selbstbetriebenen Cloudspeicher behält man die Kontrolle wo die Daten gespeichert werden.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["Nextcloud, Protonmail"], optional: "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Mindeststandards/Mindeststandard_Mitnutzung_externer_Cloud-Dienste.pdf?__blob=publicationFile&v=8", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["Nextcloud, Protonmail"], optional: "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Mindeststandards/Mindeststandard_Mitnutzung_externer_Cloud-Dienste.pdf?__blob=publicationFile&v=8", next: []}
            ]
        },
{
            text: "Müssen Ihre Mitarbeiter E-Mails verschicken?", 
            optional: "E-Mails sind standardmäßig unverschlüsselt und daher kein sicheres Kommunikationsmittel.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["Protonmail"], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Verschluesselung/EMail_Verschluesselung/email_verschluesselung_node.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["Protonmail"], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Verschluesselung/EMail_Verschluesselung/email_verschluesselung_node.html", next: []}
            ]
        },
{
            text: "Was tun wenn User oft verdächtige Emails empfangen?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Müssen Ihre Mitarbeiter kolloborativ arbeiten?", 
            optional: "Es gibt spezielle Onlinedienste, die sich auf gemeinsames Arbeiten spezialisiert haben.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["GoogleDocs, NextCloud"], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["GoogleDocs, NextCloud"], optional: "", next: []}
            ]
        },
{
            text: "Gibt es für Ihr Unternehmen Multifaktorauthentifizierung?", 
            optional: "Mulitfaktorauthentifizierung erhöht die Sicherheit, falls ein Authentifizierungsmerkmal eines Mitarbeiters komprommitiert wurde.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Gibt es Nutzer, die zu hohe Privilegien besitzen?", 
            optional: "Zu Hohe Rechte erhöhen das Risko von Missbrauch bzw. des Schadenpotentials",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Ermöglichen Sie schnelle Hilfe im Falle von technischen Problemen, Sicherheitsverstoßen oder Verlust?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Möchten Sie Ihren Users Zugriff auf die sozialen Medien ermöglichen?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Verwenden Ihre Mitarbeiter eine Firewall?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        }] 
mlist = [{
            text: "Verwenden Ihre Mitarbeiter kabellose Eingabgegeräte?", 
            optional: "Kabellose Tastaturen und Mäuse können von Angreifern abgehört und manipuliert werden. Dadurch können sensible Daten mitgelesen werden oder schadhafte Befehle in das System eingegeben werden.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "https://www.itk-security.de/funktastaturen-und-maeuse-sind-nicht-sicher-aus-die-maus/", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "https://www.itk-security.de/funktastaturen-und-maeuse-sind-nicht-sicher-aus-die-maus/", next: []}
            ]
        },
{
            text: "Müssen ihre Mitarbeiter Daten auf externen Datenträgern speichern?", 
            optional: "Unverschlüsselte Datenträger stellen bei Diebstahl oder Verlust ein hohes Risiko dar. Außerdem fordern einige Gesetze Verschlüsselung.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["Bitlocker, Veracrypt, Androidsystemverschlüsselung, "], optional: "https://www.it-techblog.de/darum-ist-eine-gute-verschluesselung-wichtig/12/2017/", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["Bitlocker, Veracrypt, Androidsystemverschlüsselung, "], optional: "https://www.it-techblog.de/darum-ist-eine-gute-verschluesselung-wichtig/12/2017/", next: []}
            ]
        },
{
            text: "Können die Mitarbeiter private Geräte anschließen?", 
            optional: "Eigene Geräte können maliziöse Aktionen auf dem System ausführen.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Sind die Arbeitsgeräte verschlüsselt?", 
            optional: "Unverschlüsselte Datenträger stellen bei Diebstahl oder Verlust ein hohes Risiko dar. Außerdem fordern einige Gesetze Verschlüsselung.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["Bitlocker, Veracrypt, Androidsystemverschlüsselung, "], optional: "https://support.microsoft.com/de-de/help/4028713/windows-10-turn-on-device-encryption", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["Bitlocker, Veracrypt, Androidsystemverschlüsselung, "], optional: "https://support.microsoft.com/de-de/help/4028713/windows-10-turn-on-device-encryption", next: []}
            ]
        },
{
            text: "Verwenden Ihre Mitarbeiter die aktuellsten Softwareversionen?", 
            optional: "Veraltete Softwareversionen können Schwachstellen enthalten über die ein Angreifer in das System eindringen kann.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["Windows 10
Chrome
Firefox
Outlook"], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/EinrichtungSoftware/UpdatePatchManagement/LeitfadenUpdatemanagement/leitfadenUpdateManagement_node.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["Windows 10
Chrome
Firefox
Outlook"], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/EinrichtungSoftware/UpdatePatchManagement/LeitfadenUpdatemanagement/leitfadenUpdateManagement_node.html", next: []}
            ]
        },
{
            text: "Kann der Bildschirm ihrer Mitarbeiter von anderen unberechtigt eingesehen werden?", 
            optional: "Ein Angreifer könnte schützenswerte Informationen ausspähen.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "https://www.haufe.de/compliance/management-praxis/datenschutz-bei-notebooks-durch-blickschutzfilter_230130_278940.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "https://www.haufe.de/compliance/management-praxis/datenschutz-bei-notebooks-durch-blickschutzfilter_230130_278940.html", next: []}
            ]
        },
{
            text: "Lagern Sie zuhause schützenswerte Informationen/Gegenstände?", 
            optional: "Unverschlüsselte Informationen können durch einen Einbruch verloren gehen.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "https://www.ndr.de/ratgeber/verbraucher/Einbruchschutz-So-werden-Haus-und-Wohnung-sicherer,einbruchschutz130.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "https://www.ndr.de/ratgeber/verbraucher/Einbruchschutz-So-werden-Haus-und-Wohnung-sicherer,einbruchschutz130.html", next: []}
            ]
        },
{
            text: "Setzen Sie Antivirussoftware ein?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Schutzprogramme/Virenschutzprogramme/virenschutzprogramme_node.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Schutzprogramme/Virenschutzprogramme/virenschutzprogramme_node.html", next: []}
            ]
        },
{
            text: "Müssen Ihre Mitarbeiter auf Dateien aus dem Firmennetzwerk zugreifen?", 
            optional: "Ein VPN Tunnel bieter sicheren Zugriff auf das Firmennetzwerk.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["OpenVPN, Wireguard"], optional: "https://www.bsi.bund.de/DE/Themen/StandardsKriterien/ISi-Reihe/ISi-VPN/vpn_node.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["OpenVPN, Wireguard"], optional: "https://www.bsi.bund.de/DE/Themen/StandardsKriterien/ISi-Reihe/ISi-VPN/vpn_node.html", next: []}
            ]
        },
{
            text: "Müssen Ihre Mitarbeiter Dateien undeinerander austauschen?", 
            optional: "Durch einen selbstbetriebenen Cloudspeicher behält man die Kontrolle wo die Daten gespeichert werden.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["Nextcloud, Protonmail"], optional: "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Mindeststandards/Mindeststandard_Mitnutzung_externer_Cloud-Dienste.pdf?__blob=publicationFile&v=8", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["Nextcloud, Protonmail"], optional: "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Mindeststandards/Mindeststandard_Mitnutzung_externer_Cloud-Dienste.pdf?__blob=publicationFile&v=8", next: []}
            ]
        },
{
            text: "Müssen Ihre Mitarbeiter E-Mails verschicken?", 
            optional: "E-Mails sind standardmäßig unverschlüsselt und daher kein sicheres Kommunikationsmittel.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["Protonmail"], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Verschluesselung/EMail_Verschluesselung/email_verschluesselung_node.html", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["Protonmail"], optional: "https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Verschluesselung/EMail_Verschluesselung/email_verschluesselung_node.html", next: []}
            ]
        },
{
            text: "Müssen Ihre Mitarbeiter kolloborativ arbeiten?", 
            optional: "Es gibt spezielle Onlinedienste, die sich auf gemeinsames Arbeiten spezialisiert haben.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["GoogleDocs, NextCloud"], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["GoogleDocs, NextCloud"], optional: "", next: []}
            ]
        },
{
            text: "Gibt es für Ihr Unternehmen Multifaktorauthentifizierung?", 
            optional: "Mulitfaktorauthentifizierung erhöht die Sicherheit, falls ein Authentifizierungsmerkmal eines Mitarbeiters komprommitiert wurde.",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Gibt es Nutzer, die zu hohe Privilegien besitzen?", 
            optional: "Zu Hohe Rechte erhöhen das Risko von Missbrauch bzw. des Schadenpotentials",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Tauschen Sie sich oft über aktuelle Sicherheitsstandards mit Ihren Mitarbeitern aus? ", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        },
{
            text: "Verwenden Ihre Mitarbeiter eine Firewall?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ]
        }
]

module.exports =  {
    alist,
    mlist,
    ulist
}
