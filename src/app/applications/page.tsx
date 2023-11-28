'use client';

import { Card, Text, Badge, Bold } from "@tremor/react";
import { useState, useEffect } from "react";

interface Data {
    id: number;
    org_interested: "yes" | "no";
    name: string;
    organization_name: string;
    senior_person: string;
    email: string;
    phone: string;
    website: string;
    twitter: string;
    linkedin: string;
    facebook: string;
    organization_type: string[];
    organization_description: string[];
}

export default function Applications() {
    const [applications, setApplications] = useState<Data[]>([]);

    async function fetchApplications() {
        // Fetch data from the PostgreSQL database
        const response = await fetch("/api/applications");
        const data = await response.json();
        setApplications(data);
        console.log(applications);

    }

    useEffect(() => {
        fetchApplications();
    }, []);

    type OrganizationType = 'civil' | 'chapter' | 'public';

    function getOrganizationTypeText(value: OrganizationType): string {
        switch (value) {
            case 'civil':
                return 'Civil Society organisation';
            case 'chapter':
                return 'Chapter 9 Institution';
            case 'public':
                return 'Public Service Commission';
            default:
                // Handle the case where the value is not recognized
                return '';
        }
    }

    type OrganizationDescription = 'association' | 'media' | 'think' | 'trade' | 'faith' | 'business' | 'public' | 'service' | 'human' | 'auditor' | 'electoral' | 'gender' | 'promotion';

    function getOrganizationDescriptionText(value: OrganizationDescription): string {
        switch (value) {
            case 'association':
                return 'An association, non-governmental institution, women\'s organisation, community-based';
            case 'media':
                return 'A media organisation, including investigative journalist organisations';
            case 'think':
                return 'A think tank, a research institution or a university';
            case 'trade':
                return 'A trade union or a labour association';
            case 'faith':
                return 'A faith-based organisation';
            case 'business':
                return 'A business association or organisation';
            case 'public':
                return 'The Public Protector';
            case 'service':
                return 'The Public Service Commission';
            case 'human':
                return 'The South African Human Rights Commission';
            case 'auditor':
                return 'The Auditor General';
            case 'electoral':
                return 'The Independent Electoral Commission';
            case 'gender':
                return 'The Commission for Gender Equality';
            case 'promotion':
                return 'The Commission for the Promotion & Protection of the Rights of Cultural, Religious and Linguistic Communities';
            default:
                // Handle the case where the value is not recognized
                return '';
        }
    }


    return (
        <div className="p-10 px-20">
            <h1 className="text-center text-3xl py-5 font-bold">Applications</h1>
            {applications && applications.length > 0 ? (
                applications.map((application) => (
                    <Card key={application.id} className="my-5 application">
                        <h3 className="text-2xl font-bold pt-2">{application.organization_name}</h3>
                        <h3 className="font-medium pb-2 text-slate-600">{application.senior_person}</h3>
                        <Text>Organization Name: <Bold>{application.organization_name}</Bold></Text>
                        <Text>Contact Person: <Bold>{application.senior_person}</Bold></Text>
                        <Text>Email: <Bold>{application.email}</Bold></Text>
                        <Text>Phone: <Bold>{application.phone}</Bold></Text>
                        <Text>Website: <Bold>{application.website}</Bold></Text>
                        <Text>Twitter: <Bold>{application.twitter}</Bold></Text>
                        <Text>LinkedIn: <Bold>{application.linkedin}</Bold></Text>
                        <Text>Facebook: <Bold>{application.facebook}</Bold></Text>
                        <Text className="pt-3 pb-1 font-medium">Organization Type:B</Text>
                        <ul>
                            {application.organization_type.map((type) => (
                                <Badge className="mx-1"><li key={type}>{getOrganizationTypeText(type as OrganizationType)}</li></Badge>
                            ))}
                        </ul>
                        <Text className="pt-3 pb-1 font-medium">Organization Description:</Text>
                        <ul style={{ listStyleType: 'disc' }} className="list-inside px-6">
                            {application.organization_description.map((description) => (
                                <li key={description}>{getOrganizationDescriptionText(description as OrganizationDescription)}</li>
                            ))}
                        </ul>
                    </Card>
                ))
            ) : (
                <div>No applications yet</div>
            )}
        </div>
    );
}
