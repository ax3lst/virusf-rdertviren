liste = [
{
            id: 0,
            text: "Wer bist denn du?", 
            optional: "",
            type: 1,
            antworten: [
                {id: 0, text: "User", empfehlung: [], optional: "", next: [1]},
                {id: 1, text: "Admin", empfehlung: [], optional: "", next: [29]},
                {id: 2, text: "Manager", empfehlung: [], optional: "", next: [46]}
            ]
        },
{
            id: 1,
            text: "Verwenden Sie kabellose Eingabgeräte?", 
            optional: "Kabellose Tastaturen und Mäuse können von Angreifern abgehört und manipuliert werden. Dadurch können sensible Daten mitgelesen werden oder schadhafte Befehle in das System eingegeben werden.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.itk-security.de/funktastaturen-und-maeuse-sind-nicht-sicher-aus-die-maus/"], optional: "", next: [2]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [2]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.itk-security.de/funktastaturen-und-maeuse-sind-nicht-sicher-aus-die-maus/"], optional: "", next: [2]}
            ],
            handlung: "Diese Eingabegeräte sind oftmals nicht sicher und weisen viele Schwachstellen auf. Daher  lassen sie sich diese auch nicht mit den Company Policies vereinbaren, Verwenden Sie daher nur Equipment Ihres Unternehmen."
        },
{
            id: 2,
            text: "Müssen Daten auf externen Datenträgern gespeichert werden (z.B. Backups)?", 
            optional: "Unverschlüsselte Datenträger stellen bei Diebstahl oder Verlust ein hohes Risiko dar. Außerdem fordern einige Gesetze Verschlüsselung.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.it-techblog.de/darum-ist-eine-gute-verschluesselung-wichtig/12/2017/"], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [3]},
                {id: 1, text: "Nein", empfehlung: [], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [3]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.it-techblog.de/darum-ist-eine-gute-verschluesselung-wichtig/12/2017/"], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [3]}
            ],
            handlung: "Verwenden Sie vorgegebene veschlüsselte Datenträger."
        },
{
            id: 3,
            text: "Haben sie vor private Geräte an ihr Firmengerät anzuschließen?", 
            optional: "Eigene Geräte können maliziöse Aktionen auf dem System ausführen.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [4]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [4]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [4]}
            ],
            handlung: "Verwenden Sie nur Firmengeräte"
        },
{
            id: 4,
            text: "Ist ihr Gerät verschlüsselt? (nicht verwechseln mit Bildschirmcode/PW)", 
            optional: "Unverschlüsselte Datenträger stellen bei Diebstahl oder Verlust ein hohes Risiko dar. Außerdem fordern einige Gesetze Verschlüsselung.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://support.microsoft.com/de-de/help/4028713/windows-10-turn-on-device-encryption"], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [5]},
                {id: 1, text: "Nein", empfehlung: [], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [5]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://support.microsoft.com/de-de/help/4028713/windows-10-turn-on-device-encryption"], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [5]}
            ],
            handlung: "Aktivieren Sie Systemverschlüsselung (Bitlocker, Android, MacOS)"
        },
{
            id: 5,
            text: "Ist die verwendete Software (Browser, Betriebssystem, etc.) auf dem aktuellsten Stand?", 
            optional: "Veraltete Softwareversionen können Schwachstellen enthalten über die ein Angreifer in das System eindringen kann.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/EinrichtungSoftware/UpdatePatchManagement/LeitfadenUpdatemanagement/leitfadenUpdateManagement_node.html"], optional: "Windows 10<br \>Chrome<br \>Firefox<br \>Outlook", next: [6]},
                {id: 1, text: "Nein", empfehlung: [], optional: "Windows 10<br \>Chrome<br \>Firefox<br \>Outlook", next: [6]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/EinrichtungSoftware/UpdatePatchManagement/LeitfadenUpdatemanagement/leitfadenUpdateManagement_node.html"], optional: "Windows 10<br \>Chrome<br \>Firefox<br \>Outlook", next: [6]}
            ],
            handlung: "Aktualisieren Sie die verwendete Software aus vertrauenswürdigen Quellen<br \>- Betriebssystem<br \>- Browser<br \>- Mail Client<br \>- etc."
        },
{
            id: 6,
            text: "Kann Ihr Bildschirm von anderen unberechtigt eingesehen werden?", 
            optional: "Ein Angreifer könnte schützenswerte Informationen ausspähen.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.haufe.de/compliance/management-praxis/datenschutz-bei-notebooks-durch-blickschutzfilter_230130_278940.html"], optional: "", next: [7]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [7]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.haufe.de/compliance/management-praxis/datenschutz-bei-notebooks-durch-blickschutzfilter_230130_278940.html"], optional: "", next: [7]}
            ],
            handlung: "Verwenden Sie unbedingt einen Blickschutzfilter um Shoulder Surfing zu vermeiden"
        },
{
            id: 7,
            text: "Lagern Sie zuhause schützenswerte Informationen/Gegenstände?", 
            optional: "Unverschlüsselte Informationen können durch einen Einbruch verloren gehen.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.ndr.de/ratgeber/verbraucher/Einbruchschutz-So-werden-Haus-und-Wohnung-sicherer,einbruchschutz130.html"], optional: "", next: [8]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [8]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.ndr.de/ratgeber/verbraucher/Einbruchschutz-So-werden-Haus-und-Wohnung-sicherer,einbruchschutz130.html"], optional: "", next: [8]}
            ],
            handlung: "Ergreifen Sie adequate Maßnahmen zum Einbruch- und Zutrittsschutz. Bewahren Sie die Dokumente in einem absperrbaren Aufbewahrungsort."
        },
{
            id: 8,
            text: "Wie kann ich mein Gerät im unbenutzen Zustand schützen?", 
            optional: "Nicht gesperrte Systeme ermöglichen unberechtigten Zugriff auf das System. Ein Angreifer kann so Zugriff auf schützenswerte Informationen erlangen oder schadhafte Befehle ausführen.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "[Win] + L", next: [9]},
                {id: 1, text: "Nein", empfehlung: [], optional: "[Win] + L", next: [9]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "[Win] + L", next: [9]}
            ],
            handlung: "Beim Verlassen des Gerätes sollten Sie jederzeit den Bildschirm sperren. Zusätzlich können sie beispielsweise durch entfernen der Smartcard (Disk Encrption) sicherstellen, dass die Inhalte des Computers nicht zugänglich sind für Dritte. "
        },
{
            id: 9,
            text: "Führen Sie auch Firmentelefonate zuhause?", 
            optional: "Über mithörende Geräte könnten schützenswerte Informationen mitgeschnitten werden.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [10]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [10]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [10]}
            ],
            handlung: "Dazu sollten Sie die Abhörsicherheit gewährleisten. Wenn Sie beispielswieise Geräte besitzen, die Bild- oder Tonaufzeichnen können (z.B. GoogleHome, Amazon Alexa, Babyphones) solten Sie diese umgehen deaktivieren."
        },
{
            id: 10,
            text: "Verwenden Sie Geräte die Bild- oder Tonaufzeichnen können (z.B. GoogleHome, Amazon Alexa, Babyphones)", 
            optional: "Falsch konfigurierte Kameras können schützenswerte Informationen im Internet veröffentlichen.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.heise.de/newsticker/meldung/Googles-Sprachassistent-Mitarbeiter-hoeren-und-bewerten-Audioaufnahmen-4467985.html"], optional: "", next: [11]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [11]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.heise.de/newsticker/meldung/Googles-Sprachassistent-Mitarbeiter-hoeren-und-bewerten-Audioaufnahmen-4467985.html"], optional: "", next: [11]}
            ],
            handlung: "Schalten Sie mithörenden Geräte immer aus (Googlehome, Alexa, Babyphones, etc) Falls vorhanden sollten Sie Überwachungskameras ebenfalls deaktivieren "
        },
{
            id: 11,
            text: "Arbeiten Sie mit ihrem privaten Computer?", 
            optional: "Je höher die Rechte des Benutzeraccount sind desto größer ein potentieller Schaden, der durch eine Komprommitierung entsteht.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [12]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [12]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [12]}
            ],
            handlung: "Legen Sie für geschäftliche Arbeit ein neues Benutzerkonto auf ihrem System an, das keine Administratorrechte hat."
        },
{
            id: 12,
            text: "Setzen Sie Antivirussoftware ein?", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Schutzprogramme/Virenschutzprogramme/virenschutzprogramme_node.html"], optional: "", next: [13]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [13]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Schutzprogramme/Virenschutzprogramme/virenschutzprogramme_node.html"], optional: "", next: [13]}
            ],
            handlung: "Installieren und aktualsiseren Sie eine Antivirenschutzlösung und prüfen Sie damit das System."
        },
{
            id: 13,
            text: "Surfen Sie mit ihrem Arbeitsgerät?", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [14]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [14]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [14]}
            ],
            handlung: "Blockieren sie schadhafte Webseiten bspw. mit den Browser Erweiterungen uBlock Origin und NoScript<br \>"
        },
{
            id: 14,
            text: "Müssen Sie auf Dateien aus dem Firmennetzwerk zugreifen?", 
            optional: "Ein VPN Tunnel bieter sicheren Zugriff auf das Firmennetzwerk.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.bsi.bund.de/DE/Themen/StandardsKriterien/ISi-Reihe/ISi-VPN/vpn_node.html"], optional: "OpenVPN, Wireguard", next: [15]},
                {id: 1, text: "Nein", empfehlung: [], optional: "OpenVPN, Wireguard", next: [15]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.bsi.bund.de/DE/Themen/StandardsKriterien/ISi-Reihe/ISi-VPN/vpn_node.html"], optional: "OpenVPN, Wireguard", next: [15]}
            ],
            handlung: "Verwenden Sie einen VPN-Client"
        },
{
            id: 15,
            text: "Müssen Sie Dateien mit Kollegen austauschen?", 
            optional: "Durch einen selbstbetriebenen Cloudspeicher behält man die Kontrolle wo die Daten gespeichert werden.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Mindeststandards/Mindeststandard_Mitnutzung_externer_Cloud-Dienste.pdf?__blob=publicationFile&v=8"], optional: "Nextcloud, Protonmail", next: [16]},
                {id: 1, text: "Nein", empfehlung: [], optional: "Nextcloud, Protonmail", next: [16]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Mindeststandards/Mindeststandard_Mitnutzung_externer_Cloud-Dienste.pdf?__blob=publicationFile&v=8"], optional: "Nextcloud, Protonmail", next: [16]}
            ],
            handlung: "Verwenden Sie NextCloud oder verschlüsselte E-Mails."
        },
{
            id: 16,
            text: "Verschicken Sie Dokumente an Personen außerhalb der Firma?", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://support.office.com/de-de/article/entfernen-von-ausgeblendeten-daten-und-pers%C3%B6nlichen-informationen-durch-pr%C3%BCfen-von-dokumenten-pr%C3%A4sentationen-oder-arbeitsmappen-356b7b5d-77af-44fe-a07f-9aa4d085966f"], optional: "", next: [17]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [17]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://support.office.com/de-de/article/entfernen-von-ausgeblendeten-daten-und-pers%C3%B6nlichen-informationen-durch-pr%C3%BCfen-von-dokumenten-pr%C3%A4sentationen-oder-arbeitsmappen-356b7b5d-77af-44fe-a07f-9aa4d085966f"], optional: "", next: [17]}
            ],
            handlung: "Entfernen Sie Metadaten aus den Dokumenten Dokumenten."
        },
{
            id: 17,
            text: "Müssen Sie E-Mails verschicken?", 
            optional: "E-Mails sind standardmäßig unverschlüsselt und daher kein sicheres Kommunikationsmittel.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Verschluesselung/EMail_Verschluesselung/email_verschluesselung_node.html"], optional: "Protonmail", next: [18]},
                {id: 1, text: "Nein", empfehlung: [], optional: "Protonmail", next: [18]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Verschluesselung/EMail_Verschluesselung/email_verschluesselung_node.html"], optional: "Protonmail", next: [18]}
            ],
            handlung: "Verwenden sie verschlüsselte Nachrichten (S/Mime, PGP) oder Protonmail<br \>"
        },
{
            id: 18,
            text: "Was tun wenn mir eine Email verdächtig vorkommt?", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [19]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [19]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [19]}
            ],
            handlung: "Nutzen Sie wenn möglich den Phishing Button zur effektiven Meldung von Verdachtsfällen oder informieren Sie umgehend den IT Support. Grundsätzlich sollten Sie E-Mail Anhänge nie unbedarft öffnen, sondern nur wenn Sie die Quelle verifizieren können. "
        },
{
            id: 19,
            text: "Müssen sie mit Kollegen telefonieren (Sprache/Video)?", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.bsi.bund.de/DE/Themen/StandardsKriterien/ISi-Reihe/ISi-VoIP/voip_node.html"], optional: "Skype for Business<br \>Discord<br \>Zooom", next: [20]},
                {id: 1, text: "Nein", empfehlung: [], optional: "Skype for Business<br \>Discord<br \>Zooom", next: [20]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.bsi.bund.de/DE/Themen/StandardsKriterien/ISi-Reihe/ISi-VoIP/voip_node.html"], optional: "Skype for Business<br \>Discord<br \>Zooom", next: [20]}
            ],
            handlung: "Kommunikation - Nutzung von vertrauenswürdigen Kanälen<br \>(Video-)konferenzen<br \>Chats<br \>VoiP-Anlagen („Voice over IP“)"
        },
{
            id: 20,
            text: "Müssen Sie mit Kollegen kolloborativ zusammen arbeiten?", 
            optional: "Es gibt spezielle Onlinedienste, die sich auf gemeinsames Arbeiten spezialisiert haben.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "GoogleDocs, NextCloud", next: [21]},
                {id: 1, text: "Nein", empfehlung: [], optional: "GoogleDocs, NextCloud", next: [21]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "GoogleDocs, NextCloud", next: [21]}
            ],
            handlung: "Verwenden Sie GoogleDocs oder von der Firma bereitgestellte Dienste (NextCloud)"
        },
{
            id: 21,
            text: "Gibt es eine Multifaktorauthentifizierung?", 
            optional: "Mulitfaktorauthentifizierung erhöht die Sicherheit, falls ein Authentifizierungsmerkmal eines Mitarbeiters komprommitiert wurde.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [22]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [22]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [22]}
            ],
            handlung: "Verwenden Sie die Multifaktorauthentifizierung."
        },
{
            id: 22,
            text: "Besitzen Sie mehr Zugriffsrechte als Sie benötigen?", 
            optional: "Zu Hohe Rechte erhöhen das Risko von Missbrauch bzw. des Schadenpotentials",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [23]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [23]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [23]}
            ],
            handlung: "Verwenden Sie die minimalen Zugriffsrechte und melden Sie ihre zu hohen Privilegien an den Administrator."
        },
{
            id: 23,
            text: "Besitzen Sie geheime Zugangsdaten (digitale Schlüssel, Passwörter etc.)", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [24]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [24]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [24]}
            ],
            handlung: "Verwenden Sie dafür immer einen geeigneten Passwortmanager. Schreiben Sie Passwörter nicht auf und vertrauen Sie niemanden Ihr Passwort an. Nutzen Sie die Password-Policy Ihres Unternehmens und verwenden Sie komplexe Passwörter. "
        },
{
            id: 24,
            text: "Brauchen Sie Zugriff auf das Firmennetzwerk?", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [25]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [25]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [25]}
            ],
            handlung: "Sicher ins Firmen-Netzwerk (VPN) <br \>"
        },
{
            id: 25,
            text: "Wissen Sie was zutun ist im Falle eines Sicherheitsverstoßes oder Verlust?", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [26]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [26]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [26]}
            ],
            handlung: "Zur zeitnahen Verlustmeldung wenden Sie sich umgehend an ihren Manager und/oder Ihren IT Support. Auch bei etwaigen Sicherheitsverstößen oder Schwachstellen ist es wichtig, diese zeitnah zu melden, da er Schaden sonst nur größer werden kann. Je schneller eine Schwachstelle erkannt wird, desto schneller kann mitigiert werden, "
        },
{
            id: 26,
            text: "Wie verhalte ich mich auf den sozialen Medien?", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [27]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [27]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [27]}
            ],
            handlung: "Bitte teilen Sie keine Fotos vom Homeoffice und Ihrer Arbeit auf den sozialen teilen (Bildschirm, Kollegen etc) ■"
        },
{
            id: 27,
            text: "Tauschen Sie sich oft über aktuelle Sicherheitsstandards aus? ", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [28]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [28]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [28]}
            ],
            handlung: "Erstellen Sie doch ein FAQ um Security Fragen zum Thema Remote arbeiten zu dokumentieren. Diese können Sie anschließlich Kollegen zugänglich machen, um die Admin zu entlasten. "
        },
{
            id: 28,
            text: "Ist ihr Netzwerk vor ungeschütztem Zugriff gesichert?", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ],
            handlung: "Setzen Sie eine Firewall ein"
        },
{
            id: 29,
            text: ".", 
            optional: "Unverschlüsselte Datenträger stellen bei Diebstahl oder Verlust ein hohes Risiko dar. Außerdem fordern einige Gesetze Verschlüsselung.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.it-techblog.de/darum-ist-eine-gute-verschluesselung-wichtig/12/2017/"], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [30]},
                {id: 1, text: "Nein", empfehlung: [], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [30]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.it-techblog.de/darum-ist-eine-gute-verschluesselung-wichtig/12/2017/"], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [30]}
            ],
            handlung: ""
        },
{
            id: 30,
            text: "Können die Mitarbeiter private Geräte anschließen?", 
            optional: "Eigene Geräte können maliziöse Aktionen auf dem System ausführen.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [31]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [31]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [31]}
            ],
            handlung: "Verhindern sie weitestgehend das Anschließen privater Geräte."
        },
{
            id: 31,
            text: "Sind die Arbeitsgeräte verschlüsselt?", 
            optional: "Unverschlüsselte Datenträger stellen bei Diebstahl oder Verlust ein hohes Risiko dar. Außerdem fordern einige Gesetze Verschlüsselung.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://support.microsoft.com/de-de/help/4028713/windows-10-turn-on-device-encryption"], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [32]},
                {id: 1, text: "Nein", empfehlung: [], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [32]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://support.microsoft.com/de-de/help/4028713/windows-10-turn-on-device-encryption"], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [32]}
            ],
            handlung: "Aktivieren Sie Systemverschlüsselung (Bitlocker, Android, MacOS)"
        },
{
            id: 32,
            text: "Ist die eingesetzt Software (Browser, Betriebssystem, etc.) auf dem aktuellsten Stand?", 
            optional: "Veraltete Softwareversionen können Schwachstellen enthalten über die ein Angreifer in das System eindringen kann.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/EinrichtungSoftware/UpdatePatchManagement/LeitfadenUpdatemanagement/leitfadenUpdateManagement_node.html"], optional: "Windows 10<br \>Chrome<br \>Firefox<br \>Outlook", next: [33]},
                {id: 1, text: "Nein", empfehlung: [], optional: "Windows 10<br \>Chrome<br \>Firefox<br \>Outlook", next: [33]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/EinrichtungSoftware/UpdatePatchManagement/LeitfadenUpdatemanagement/leitfadenUpdateManagement_node.html"], optional: "Windows 10<br \>Chrome<br \>Firefox<br \>Outlook", next: [33]}
            ],
            handlung: "Aktualisieren Sie die verwendete Software aus vertrauenswürdigen Quellen<br \>- Betriebssystem<br \>- Browser<br \>- Mail Client<br \>- etc."
        },
{
            id: 33,
            text: "Kann der Bildschirm ihrer Mitarbeiter von anderen unberechtigt eingesehen werden?", 
            optional: "Ein Angreifer könnte schützenswerte Informationen ausspähen.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.haufe.de/compliance/management-praxis/datenschutz-bei-notebooks-durch-blickschutzfilter_230130_278940.html"], optional: "", next: [34]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [34]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.haufe.de/compliance/management-praxis/datenschutz-bei-notebooks-durch-blickschutzfilter_230130_278940.html"], optional: "", next: [34]}
            ],
            handlung: "Installieren Sie Blickschutzfilter auf den Geräten ihrer Mitarbeiter."
        },
{
            id: 34,
            text: "Setzen Sie Antivirussoftware ein?", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Schutzprogramme/Virenschutzprogramme/virenschutzprogramme_node.html"], optional: "", next: [35]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [35]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Schutzprogramme/Virenschutzprogramme/virenschutzprogramme_node.html"], optional: "", next: [35]}
            ],
            handlung: "Installieren und aktualsiseren Sie eine Antivirenschutzlösung und prüfen Sie damit das System."
        },
{
            id: 35,
            text: "Surfen ihre Mitarbeiter  mit ihren Geräten?", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [36]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [36]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [36]}
            ],
            handlung: "Blockieren sie schadhafte Webseiten bspw. mit den Browser Erweiterungen uBlock Origin und NoScript<br \>Blockieren Sei Streamingdienste, um Bandbreite für Remote Arbeiter zu sparen"
        },
{
            id: 36,
            text: "Müssen Ihre Mitarbeiter auf Dateien aus dem Firmennetzwerk zugreifen?", 
            optional: "Ein VPN Tunnel bieter sicheren Zugriff auf das Firmennetzwerk.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.bsi.bund.de/DE/Themen/StandardsKriterien/ISi-Reihe/ISi-VPN/vpn_node.html"], optional: "OpenVPN, Wireguard", next: [37]},
                {id: 1, text: "Nein", empfehlung: [], optional: "OpenVPN, Wireguard", next: [37]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.bsi.bund.de/DE/Themen/StandardsKriterien/ISi-Reihe/ISi-VPN/vpn_node.html"], optional: "OpenVPN, Wireguard", next: [37]}
            ],
            handlung: "Richten Sie einen VPN-Server ein"
        },
{
            id: 37,
            text: "Müssen Ihre Mitarbeiter Dateien undeinerander austauschen?", 
            optional: "Durch einen selbstbetriebenen Cloudspeicher behält man die Kontrolle wo die Daten gespeichert werden.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Mindeststandards/Mindeststandard_Mitnutzung_externer_Cloud-Dienste.pdf?__blob=publicationFile&v=8"], optional: "Nextcloud, Protonmail", next: [38]},
                {id: 1, text: "Nein", empfehlung: [], optional: "Nextcloud, Protonmail", next: [38]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Mindeststandards/Mindeststandard_Mitnutzung_externer_Cloud-Dienste.pdf?__blob=publicationFile&v=8"], optional: "Nextcloud, Protonmail", next: [38]}
            ],
            handlung: "Richten Sie einen selbstbetrieben Clouddienst (bspw. NextCloud) oder verschlüsselte E-Mail Kommunikation ein (S/MIME, PGP, Protonmail)"
        },
{
            id: 38,
            text: "Müssen Ihre Mitarbeiter E-Mails verschicken?", 
            optional: "E-Mails sind standardmäßig unverschlüsselt und daher kein sicheres Kommunikationsmittel.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Verschluesselung/EMail_Verschluesselung/email_verschluesselung_node.html"], optional: "Protonmail", next: [39]},
                {id: 1, text: "Nein", empfehlung: [], optional: "Protonmail", next: [39]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Verschluesselung/EMail_Verschluesselung/email_verschluesselung_node.html"], optional: "Protonmail", next: [39]}
            ],
            handlung: "Richten Sie einen Mailserver ein. Ermöglichen Sie verschlüsselte Kommunikation (S/MIME,PGP, Protonmail)"
        },
{
            id: 39,
            text: "Was tun wenn User oft verdächtige Emails empfangen?", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [40]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [40]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [40]}
            ],
            handlung: "Richten Sie den Mitarbeitern einen Meldebutton ein oder blockieren bzw. filtern sie Verdächtige Mails. "
        },
{
            id: 40,
            text: "Müssen Ihre Mitarbeiter kolloborativ arbeiten?", 
            optional: "Es gibt spezielle Onlinedienste, die sich auf gemeinsames Arbeiten spezialisiert haben.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "GoogleDocs, NextCloud", next: [41]},
                {id: 1, text: "Nein", empfehlung: [], optional: "GoogleDocs, NextCloud", next: [41]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "GoogleDocs, NextCloud", next: [41]}
            ],
            handlung: "Richten Sie GoogleDocs oder eine selbstbetriebene Cloudinstanz ein."
        },
{
            id: 41,
            text: "Gibt es für Ihr Unternehmen Multifaktorauthentifizierung?", 
            optional: "Mulitfaktorauthentifizierung erhöht die Sicherheit, falls ein Authentifizierungsmerkmal eines Mitarbeiters komprommitiert wurde.",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [42]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [42]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [42]}
            ],
            handlung: "Richten Sie Multifaktorauthentifizierung ein."
        },
{
            id: 42,
            text: "Gibt es Nutzer, die zu hohe Privilegien besitzen?", 
            optional: "Zu Hohe Rechte erhöhen das Risko von Missbrauch bzw. des Schadenpotentials",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [43]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [43]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [43]}
            ],
            handlung: "Beschränken Sie die Rechte auf das Notwendigste."
        },
{
            id: 43,
            text: "Ermöglichen Sie schnelle Hilfe im Falle von technischen Problemen, Sicherheitsverstoßen oder Verlust?", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [44]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [44]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [44]}
            ],
            handlung: "Ermöglichen Sie den Usern einen quualitativen remote support via TeamViewer oder anderenTools. Auch im Homeoffice ist es wichtig arbeitsfähig zu bleiben "
        },
{
            id: 44,
            text: "Möchten Sie Ihren Users Zugriff auf die sozialen Medien ermöglichen?", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [45]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [45]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [45]}
            ],
            handlung: "Ja / Sorgen Sie für genügend Awareness (Keine Post von internen Inalten, Bildschirmen oder Kollegen); Nein / Blockiern Sie die Webseiten "
        },
{
            id: 45,
            text: "Verwenden Ihre Mitarbeiter eine Firewall?", 
            optional: "",
            type: 1,
            handle: [1,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ],
            handlung: "Installieren Sie eine Firewall auf den Geräten ihrer Mitarbeiter oder Unterstützen Sie sie bei der Einrichtung auf den Privatgeräten."
        },
{
            id: 46,
            text: "Verwenden Ihre Mitarbeiter kabellose Eingabgegeräte?", 
            optional: "Kabellose Tastaturen und Mäuse können von Angreifern abgehört und manipuliert werden. Dadurch können sensible Daten mitgelesen werden oder schadhafte Befehle in das System eingegeben werden.",
            type: 1,
            handle: [0,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.itk-security.de/funktastaturen-und-maeuse-sind-nicht-sicher-aus-die-maus/"], optional: "", next: [47]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [47]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.itk-security.de/funktastaturen-und-maeuse-sind-nicht-sicher-aus-die-maus/"], optional: "", next: [47]}
            ],
            handlung: "Verbieten Sie ausdrücklick den Einsatz von kabellose Eingabegeräte und bieten Sie den Mitarbeitern die Möglichkeit adequates Equipment des Unternehmens für das Homeoffice zu nutzen."
        },
{
            id: 47,
            text: "Müssen ihre Mitarbeiter Daten auf externen Datenträgern speichern?", 
            optional: "Unverschlüsselte Datenträger stellen bei Diebstahl oder Verlust ein hohes Risiko dar. Außerdem fordern einige Gesetze Verschlüsselung.",
            type: 1,
            handle: [0,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.it-techblog.de/darum-ist-eine-gute-verschluesselung-wichtig/12/2017/"], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [48]},
                {id: 1, text: "Nein", empfehlung: [], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [48]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.it-techblog.de/darum-ist-eine-gute-verschluesselung-wichtig/12/2017/"], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [48]}
            ],
            handlung: "Stellen Sie verschlüsselte Datenträger zur Verfügung."
        },
{
            id: 48,
            text: "Können die Mitarbeiter private Geräte anschließen?", 
            optional: "Eigene Geräte können maliziöse Aktionen auf dem System ausführen.",
            type: 1,
            handle: [0,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [49]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [49]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [49]}
            ],
            handlung: "Erlauben Sie nur das Anschließen von Firmengeräten"
        },
{
            id: 49,
            text: "Sind die Arbeitsgeräte verschlüsselt?", 
            optional: "Unverschlüsselte Datenträger stellen bei Diebstahl oder Verlust ein hohes Risiko dar. Außerdem fordern einige Gesetze Verschlüsselung.",
            type: 1,
            handle: [0,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://support.microsoft.com/de-de/help/4028713/windows-10-turn-on-device-encryption"], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [50]},
                {id: 1, text: "Nein", empfehlung: [], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [50]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://support.microsoft.com/de-de/help/4028713/windows-10-turn-on-device-encryption"], optional: "Bitlocker, Veracrypt, Androidsystemverschlüsselung, ", next: [50]}
            ],
            handlung: "Verlangen Sie Systemverschlüsselung (Bitlocker, Android, MacOS)"
        },
{
            id: 50,
            text: "Verwenden Ihre Mitarbeiter die aktuellsten Softwareversionen?", 
            optional: "Veraltete Softwareversionen können Schwachstellen enthalten über die ein Angreifer in das System eindringen kann.",
            type: 1,
            handle: [0,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/EinrichtungSoftware/UpdatePatchManagement/LeitfadenUpdatemanagement/leitfadenUpdateManagement_node.html"], optional: "Windows 10<br \>Chrome<br \>Firefox<br \>Outlook", next: [51]},
                {id: 1, text: "Nein", empfehlung: [], optional: "Windows 10<br \>Chrome<br \>Firefox<br \>Outlook", next: [51]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/EinrichtungSoftware/UpdatePatchManagement/LeitfadenUpdatemanagement/leitfadenUpdateManagement_node.html"], optional: "Windows 10<br \>Chrome<br \>Firefox<br \>Outlook", next: [51]}
            ],
            handlung: "Fordern sie aktuelle Softwareversionen"
        },
{
            id: 51,
            text: "Kann der Bildschirm ihrer Mitarbeiter von anderen unberechtigt eingesehen werden?", 
            optional: "Ein Angreifer könnte schützenswerte Informationen ausspähen.",
            type: 1,
            handle: [0,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.haufe.de/compliance/management-praxis/datenschutz-bei-notebooks-durch-blickschutzfilter_230130_278940.html"], optional: "", next: [52]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [52]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.haufe.de/compliance/management-praxis/datenschutz-bei-notebooks-durch-blickschutzfilter_230130_278940.html"], optional: "", next: [52]}
            ],
            handlung: "Fordern Sie Bildschirmschutz für Ihre Mitarbeiter"
        },
{
            id: 52,
            text: "Lagern Sie zuhause schützenswerte Informationen/Gegenstände?", 
            optional: "Unverschlüsselte Informationen können durch einen Einbruch verloren gehen.",
            type: 1,
            handle: [0,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.ndr.de/ratgeber/verbraucher/Einbruchschutz-So-werden-Haus-und-Wohnung-sicherer,einbruchschutz130.html"], optional: "", next: [53]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [53]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.ndr.de/ratgeber/verbraucher/Einbruchschutz-So-werden-Haus-und-Wohnung-sicherer,einbruchschutz130.html"], optional: "", next: [53]}
            ],
            handlung: ""
        },
{
            id: 53,
            text: "Setzen Sie Antivirussoftware ein?", 
            optional: "",
            type: 1,
            handle: [0,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Schutzprogramme/Virenschutzprogramme/virenschutzprogramme_node.html"], optional: "", next: [54]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [54]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Schutzprogramme/Virenschutzprogramme/virenschutzprogramme_node.html"], optional: "", next: [54]}
            ],
            handlung: "Ordnen Sie den Einsatz von Antivirusschutzlösungen an."
        },
{
            id: 54,
            text: "Müssen Ihre Mitarbeiter auf Dateien aus dem Firmennetzwerk zugreifen?", 
            optional: "Ein VPN Tunnel bieter sicheren Zugriff auf das Firmennetzwerk.",
            type: 1,
            handle: [0,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.bsi.bund.de/DE/Themen/StandardsKriterien/ISi-Reihe/ISi-VPN/vpn_node.html"], optional: "OpenVPN, Wireguard", next: [55]},
                {id: 1, text: "Nein", empfehlung: [], optional: "OpenVPN, Wireguard", next: [55]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.bsi.bund.de/DE/Themen/StandardsKriterien/ISi-Reihe/ISi-VPN/vpn_node.html"], optional: "OpenVPN, Wireguard", next: [55]}
            ],
            handlung: "Richten Sie einen VPN-Server ein"
        },
{
            id: 55,
            text: "Müssen Ihre Mitarbeiter Dateien undeinerander austauschen?", 
            optional: "Durch einen selbstbetriebenen Cloudspeicher behält man die Kontrolle wo die Daten gespeichert werden.",
            type: 1,
            handle: [0,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Mindeststandards/Mindeststandard_Mitnutzung_externer_Cloud-Dienste.pdf?__blob=publicationFile&v=8"], optional: "Nextcloud, Protonmail", next: [56]},
                {id: 1, text: "Nein", empfehlung: [], optional: "Nextcloud, Protonmail", next: [56]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Mindeststandards/Mindeststandard_Mitnutzung_externer_Cloud-Dienste.pdf?__blob=publicationFile&v=8"], optional: "Nextcloud, Protonmail", next: [56]}
            ],
            handlung: "Richten Sie einen selbstbetrieben Clouddienst (bspw. NextCloud) oder verschlüsselte E-Mail Kommunikation ein (S/MIME, PGP, Protonmail)"
        },
{
            id: 56,
            text: "Müssen Ihre Mitarbeiter E-Mails verschicken?", 
            optional: "E-Mails sind standardmäßig unverschlüsselt und daher kein sicheres Kommunikationsmittel.",
            type: 1,
            handle: [0,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Verschluesselung/EMail_Verschluesselung/email_verschluesselung_node.html"], optional: "Protonmail", next: [57]},
                {id: 1, text: "Nein", empfehlung: [], optional: "Protonmail", next: [57]},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Verschluesselung/EMail_Verschluesselung/email_verschluesselung_node.html"], optional: "Protonmail", next: [57]}
            ],
            handlung: "Richten Sie einen Mailserver ein. Ermöglichen Sie verschlüsselte Kommunikation (S/MIME,PGP, Protonmail)"
        },
{
            id: 57,
            text: "Müssen Ihre Mitarbeiter kolloborativ arbeiten?", 
            optional: "Es gibt spezielle Onlinedienste, die sich auf gemeinsames Arbeiten spezialisiert haben.",
            type: 1,
            handle: [0,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "GoogleDocs, NextCloud", next: [58]},
                {id: 1, text: "Nein", empfehlung: [], optional: "GoogleDocs, NextCloud", next: [58]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "GoogleDocs, NextCloud", next: [58]}
            ],
            handlung: "Richten Sie GoogleDocs oder eine selbstbetriebene Cloudinstanz ein."
        },
{
            id: 58,
            text: "Gibt es für Ihr Unternehmen Multifaktorauthentifizierung?", 
            optional: "Mulitfaktorauthentifizierung erhöht die Sicherheit, falls ein Authentifizierungsmerkmal eines Mitarbeiters komprommitiert wurde.",
            type: 1,
            handle: [0,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [59]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [59]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [59]}
            ],
            handlung: "Richten Sie Multifaktorauthentifizierung ein."
        },
{
            id: 59,
            text: "Gibt es Nutzer, die zu hohe Privilegien besitzen?", 
            optional: "Zu Hohe Rechte erhöhen das Risko von Missbrauch bzw. des Schadenpotentials",
            type: 1,
            handle: [0,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [60]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [60]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [60]}
            ],
            handlung: "Beschränken Sie die Rechte auf das Notwendigste."
        },
{
            id: 60,
            text: "Tauschen Sie sich oft über aktuelle Sicherheitsstandards mit Ihren Mitarbeitern aus? ", 
            optional: "",
            type: 1,
            handle: [0,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: [61]},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: [61]},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: [61]}
            ],
            handlung: "Bieten Sie Ihren Mitarbeitern eine Platform oder Wiki in dem sie sich zum Thema Homeoffice austauschen können. Darin können Sie auch aktuelle Mitteilungen und Bedrohungslagen posten. "
        },
{
            id: 61,
            text: "Verwenden Ihre Mitarbeiter eine Firewall?", 
            optional: "",
            type: 1,
            handle: [0,2],
            antworten: [
                {id: 0, text: "Ja", empfehlung: [""], optional: "", next: []},
                {id: 1, text: "Nein", empfehlung: [], optional: "", next: []},
                {id: 2, text: "Weiß ich nicht", empfehlung: [""], optional: "", next: []}
            ],
            handlung: "Fordern Sie den Einsatz einer Firewall auf den eingesetzten Geräten ihrer Mitarbeiter."
        }]
