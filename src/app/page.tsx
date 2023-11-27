import { Card, Text, Title, Flex, Bold, Button } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";

export default function Instructions() {
  return (
    <div className="forms py-10">
      <div className="form">
        <Card className="my-3">
          <Image
            src="/logo.png"
            sizes="100vw"
            alt="logo"
            width="1000"
            height="100"
          />
        </Card>
        <Card decoration="top" className="my-3">
          <Title className="title">Invitation to Apply for Technical Assistance</Title>
        </Card>
        <Card className="my-3">
          <Flex justifyContent="center" className="my-2">
            <Title><Bold>SEMESTER 2 (JULY-DEC 2023)</Bold></Title>
          </Flex>
          <Title className="my-3"><Bold>INVITATION TO APPLY FOR TECHNICAL ASSISTANCE:</Bold></Title>
          <Text>This document presents the Technical Assistance Facility invitation to potential beneficiaries to apply for Technical Assistance to enhance activities related to accountability and anti-corruption during the latter half of 2023. The themes under which assistance is offered during this period are as follows:</Text>
        </Card>
        <Card className="my-3">
          <Title><Bold>THEME 1: Anti-corruption reforms in the public administration in South Africa, particularly reforms of the process of appointing top officials in Departments and State-owned Enterprises</Bold></Title>
        </Card>
        <Card className="my-3">
          <Text className="my-4">The Constitution envisages a public administration that maintains a high standard of professional ethics, that is efficient, economic and effective in its use of resources, is development-oriented, provides services in a manner that is impartial, fair, equitable and without bias, that encourages participation in policymaking and is accountable and transparent. (Constitution of South Africa, Chapter 10)</Text>
          <Text className="my-4">One of the ‘pillars’ of South Africa’s 2016 SA National Anti-Corruption Strategy (NACS) is a set of reforms of the public service, focussed on reforming recruitment and appointment systems of Government officials (including local Government administrators), specifically changing the way that senior officials are appointed to top jobs. The NACS echoes the (2012) National Development Plan Vision 2030 which had envisaged “a clearer separation between the role of the political principal (Minister or MEC) and the administrative head” as part of “building a professional public service that is insulated from political patronage”.</Text>
          <Text className="my-4">At the end of 2020, the National School of Government – a longstanding European Union (EU) beneficiary - published a draft National Implementation Framework towards the Professionalisation of the Public Service, for public comment. The Framework called for the public service to be depoliticised and insulated from political interference (including interference by Ministers), and for recruitment of public servants to be meritocratic and separated from politics. Late last year, the Framework document was approved by Cabinet, and the Public Service Commission was tasked with its implementation.</Text>
          <Text className="my-4">In 2021, Johannesburg-based think tank (and EU grantee), the Public Affairs Research Institute (PARI) published a book that argued for comprehensive reform of the rules and procedures for appointments and removals of officials in South Africa’s national and provincial public service and in municipalities (Klaaren ed. Reforming Public Administration in South Africa: A Path to Professionalisation, notably the chapter by Ryan Brunette titled Appointment and Removal in the Public Service and in Municipalities.). The authors describe the current legal framework governing appointment to and removal from the public service as “giving considerable - effectively unchecked – appointment power to political office-bearers, with predictable results in terms of corruption”. They proposed reforms to reduce the risk of corruption resulting from the appointments process, and to improve the democratic responsiveness, professionalism, and developmental effectiveness of the South African public administration. A recent article from the New South Institute (NSI) pointed out that “the Public Service Act grants politicians wide discretion over operational decisions in state organs, and in the recruitment of public servants. The situation is even worse at Local Government level, where the politicians are the administrators”. (see Sunday Times 23 July 2023, Ivor Chipkin: A- Time-for-Optimism-Is-fundamental-reform-on-its-way?)</Text>
          <Text className="my-4">The final report of the Zondo Commission was only made public in October last year. It found that the politicisation of the civil service – largely through the African National Conference’s cadre deployment policy – provided fertile ground for corruption and state capture to take place, and that improper influence over appointments and removals of Government officials was one of the key elements of state capture: “state capture has been facilitated by the appointment of pliant individuals to powerful positions in state entities” (Commission Report part 6, Vol 2 p245).</Text>
          <Text className="my-4">Researchers (such as Brunette, in the book mentioned above) have also pointed out some constraints on the Public Service Commission, the body tasked with implementing the reforms - notably that the Commission’s independence is undermined by the involvement of political leaders in appointments to the higher administrative positions in its own staff (the PSC Act provides for Ministerial involvement in appointments to the Office of the PSC). PARI therefore recommended that the PSC Act should be amended, to make the PSC “suitably independent and empowered.”</Text>
          <Text className="my-4">The senior appointments system in Government is likely to come under renewed scrutiny after the 2024 general election, when new Ministers will likely be recruiting new officials for top positions (Directors-General and their Deputies) in national Government departments and State-owned Enterprises (SOEs). For this reason, there remains significant civil society, public and media interest in how the Zondo recommendations and the National Framework towards the Professionalisation of the Public Sector will be advanced.</Text>
          <Text className="my-4">Some South African experts on public administration reform believe that the Government is now proposing to significantly change the relationships and balance of power between politicians and public officials. In the 2023 Public Service Amendment Bill, changes are being proposed - which, if passed into law, will reduce the discretion of Ministers to recruit staff and to interfere in operational matters of Government Departments, leaving hiring decisions to Departmental officials who are obliged to comply with the Public Service Regulations, rules and procedures (or face disciplinary consequences). In addition, the above-mentioned National Framework towards the Professionalisation of the Public Sector proposes new rules and requirements for recruitment into government jobs, including a pre-entry test for applicants, as is common in many other countries.</Text>
          <Text className="my-4">The selection of this theme to guide the first disbursements of technical assistance by the Enhancing Accountability Technical Assistance Facility (TAF) is intended to encourage beneficiaries to dialogue, engage and collaborate to advance public service reforms, which will have the effects of inhibiting corruption and responding effectively to state capture, in line with the recommendations made by the Zondo Commission.</Text>
        </Card>
        <Card className="my-3">
          <Title><Bold>THEME 2: International Anti-Corruption Day, 9 December 2023</Bold></Title>
          <Text className="my-4">International Anti-Corruption Day is commemorated annually on 9 December, in recognition of the United Nations Convention against Corruption (UNCAC) which South Africa ratified in 2004.</Text>
          <Text className="my-4">The selection of this theme is intended to encourage beneficiaries to dialogue and engage around International Anti-Corruption Day with a strong emphasis on collaborations between the Chapter 9 & 10 institutions and South African civil society organisations.</Text>
        </Card>
        <Card className="my-3">
          <Title><Bold>THEME 3: The role of civil society in the fight against corruption</Bold></Title>
          <Text className="my-4">The selection of this theme is intended to encourage beneficiaries to dialogue and engage around the role of civil society in the fight against corruption, with a strong emphasis on collaborations between the Chapter 9 & 10 institutions and South African civil society organisations.</Text>
        </Card>
        <Card className="my-3">
          <Title><Bold>What is a Technical Assistance Facility?</Bold></Title>
          <Text className="my-4">A Technical Assistance Facility is a mechanism established to provide support, expertise and resources to help implement development projects and programmes effectively and is commonly used in the context of international development assistance. A Technical Assistance Facility can be established to assist beneficiary organisations with designing, managing and monitoring projects or activities that address a particular socio-economic challenge, such as, in the case of the Enhancing Accountability Technical Assistance Facility, challenges related to corruption, state capture and weaknesses in accountability in South Africa.</Text>
        </Card>
        <div className="py-4">
          <Button>
            <Link href="/apply">
              Next
            </Link>
          </Button>
        </div>
      </div>
    </div >
  );
}