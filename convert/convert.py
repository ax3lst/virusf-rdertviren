#!/usr/bin/python3
from enum import Enum
import csv

filename = "projekt.csv"
linenr = 0

questions = []

class Question:

    def __init__ (self, index=0, pthema=None, ptype=None, frage=None, antwort=None, links=None, text=None, bsp=None, handle=None):
        self.index = index
        self.thema = pthema
        self.type = ptype
        self.frage = frage
        self.antwort = antwort
        self.links = links
        self.text = text
        self.bsp = bsp
        self.handle = handle


    def _clean(self,string):
        return string.replace("\r\n","<br \>").replace("\n", "<br \>")

    def __repr__(self):
        '''
    text = """
    Frage: %s
    Hinweis: %s

    Links: %s
    Beispiele: %s
        """ % (self.frage, self.text, self.links, self.bsp)
        return text
    '''
        code = '''{
            id: %d,
            text: "%s", 
            optional: "%s",
            type: %d,
            handle: %s,
            antworten: [
                {id: 0, text: "Ja", empfehlung: ["%s"], optional: "%s", next: %s},
                {id: 1, text: "Nein", empfehlung: [], optional: "%s", next: %s},
                {id: 2, text: "Weiß ich nicht", empfehlung: ["%s"], optional: "%s", next: %s}
            ],
            handlung: "%s"
        }''' % (self.index, self._clean(self.frage), self._clean(self.text), 1, self._clean(self.handle), self._clean(self.links), self._clean(self.bsp), str(self.next), self._clean(self.bsp), str(self.next), self._clean(self.links), self._clean(self.bsp), str(self.next), self._clean(self.antwort))
        return code

class QType(Enum):
    USER = 0
    ADMIN = 1
    MANAGER = 2

lastthema = None
rownr = 0
with open(filename, newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=',', quotechar='"')
    for row in reader:
        rownr += 1
        if rownr == 1:
            continue

        thema = row[0]

        if thema != None or thema != "":
            lastthema = row[0]

        #print (len(row))

        if len(row) > 9:
            userq = Question()
            userq.thema = lastthema
            userq.type = QType.USER
            userq.frage = row[2]
            need_handle = row[1]
            if(need_handle == "x"):
                userq.handle = "[0,2]"
            else:
                userq.handle = "[1,2]"
            userq.antwort = row[3]
            userq.links  = row[9]
            userq.bsp = row[8]
            userq.text = row[10]
            userq.text
            
            adminq = Question()
            adminq.thema = lastthema
            adminq.type = QType.ADMIN
            adminq.frage = row[4]
            need_handle = row[1]
            if(need_handle == "x"):
                adminq.handle = "[0,2]"
            else: 
                adminq.handle = "[1,2]"
            adminq.antwort = row[5]
            adminq.links  = row[9]
            adminq.bsp = row[8]
            adminq.text = row[10]

            managerq = Question()
            managerq.thema = lastthema
            managerq.type = QType.MANAGER
            managerq.frage = row[6]
            need_handle = row[1]
            if(need_handle == "x"):
                managerq.handle = "[1,2]"
            else: 
                managerq.handle = "[0,2]"
            managerq.antwort = row[7]
            managerq.links  = row[9]
            managerq.bsp = row[8]
            managerq.text = row[10]

            if userq.frage != "":
                questions.append(userq)
            if adminq.frage != "":
                questions.append(adminq)
            if managerq.frage != "":
                questions.append(managerq)


start_user = 1
start_admin = start_user + len([x for x in questions if x.type == QType.USER]) 
start_manager = start_admin + len([x for x in questions if x.type == QType.ADMIN])

i = 1
res = ""

# for x in questions if x.type == QTzpe.USER:
    
ind_user = i

quests = []
for q in [x for x in questions if  x.type == QType.USER]:
    q.index = i
    q.next = [i + 1]
    quests.append(q)
    i += 1
quests[-1].next = []

ind_admin = i
for q in [x for x in questions if  x.type == QType.ADMIN]:
    q.index = i
    q.next = [i + 1]
    quests.append(q)
    i += 1
quests[-1].next = []

ind_manager = i
for q in [x for x in questions if  x.type == QType.MANAGER]:
    q.index = i
    q.next = [i + 1]
    quests.append(q)
    i += 1
quests[-1].next = []

for q in quests:
    res += str(q) + ",\n"

output = """liste = [
{
            id: 0,
            text: "Wer bist denn du?", 
            optional: "",
            type: 1,
            handle: [];
            antworten: [
                {id: 0, text: "User", empfehlung: [], optional: "", next: [%d]},
                {id: 1, text: "Admin", empfehlung: [], optional: "", next: [%d]},
                {id: 2, text: "Manager", empfehlung: [], optional: "", next: [%d]}
            ],
            handlung: ""
        },
""" % (start_user, start_admin, start_manager)
output += res[:-2]
output += "]"

print(output)
# print ("""mlist = [%s] """ % res[:-2])
