'use client'

import { useState } from 'react';
import { Card, Text, Title, Bold, Button } from "@tremor/react";
import Image from "next/image";

interface FormValues {
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
    [key: string]: string | string[] | "yes" | "no";
}

export default function Instructions() {
    const [formValues, setFormValues] = useState<FormValues>({
        org_interested: "no",
        name: '',
        organization_name: '',
        senior_person: '',
        email: '',
        phone: '',
        website: '',
        twitter: '',
        linkedin: '',
        facebook: '',
        organization_type: [],
        organization_description: [],
    });

    // submit form on button click
    async function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        console.log(formValues);

        try {
            const response = await fetch('/api', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formValues),
            });


            if (response.ok) {
                const data = await response.json();
                console.log('Form submission successful:', data);
            } else {
                console.log('response failed');
            }
        } catch (error) {
            console.error('Form submission failed:', error);
        }
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }

    function propagateCheckboxChange(name: string, checked: boolean, question: string) {
        const newValues = new Set(formValues[question]);
        if (checked) {
            newValues.add(name);
        } else {
            newValues.delete(name);
        }

        setFormValues({ ...formValues, [question]: Array.from(newValues) });
    }

    function handleOrganizationTypeChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, checked } = event.target;
        propagateCheckboxChange(name, checked, 'organization_type');
    }

    function handleOrganizationDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, checked } = event.target;
        propagateCheckboxChange(name, checked, 'organization_description');
    }


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
                    <Title><Bold>Section 1: Expression of Interest</Bold></Title>
                </Card>
                <Card className="my-3">
                    <Text>
                        Is your organisation interested in applying for Technical Assistance from the Facility?
                    </Text>
                    <div className="pt-5">
                        <input type="radio" id="yes" name="org_interested" value="yes" className="pr-3" onChange={handleInputChange} checked={formValues.org_interested === "yes"} />
                        <label htmlFor="yes" className="pl-2">Yes</label>
                    </div>
                </Card>
                <Card className="my-3">
                    <Text>Which type of organisation are you?</Text>
                    <div className="pt-5">
                        <input type="checkbox" id="civil" name="civil" value="civil" className="pr-3" onChange={handleOrganizationTypeChange} />
                        <label htmlFor="civil" className="pl-2">Civil Society organisation</label>
                    </div>
                    <div className="pt-5">
                        <input type="checkbox" id="chapter" name="chapter" value="chapter" className="pr-3" onChange={handleOrganizationTypeChange} />
                        <label htmlFor="chapter" className="pl-2">Chapter 9 Institution</label>
                    </div>
                    <div className="pt-5">
                        <input type="checkbox" id="public" name="public" value="public" className="pr-3" onChange={handleOrganizationTypeChange} />
                        <label htmlFor="public" className="pl-2">Public Service Commission</label>
                    </div>
                </Card>
                <Card className="my-3">
                    <Text>Which of the following best describes your organisation?</Text>
                    <div className="pt-5">
                        <div className="py-2">
                            <input type="checkbox" id="association" name="association" value="association" className="pr-3" onChange={handleOrganizationDescriptionChange} />
                            <label htmlFor="association" className="pl-2">An association, non-governmental institution, women's organisation, community-based</label>
                        </div>
                        <div className="py-2">

                            <input type="checkbox" id="media" name="media" value="media" className="pr-3" onChange={handleOrganizationDescriptionChange} />
                            <label htmlFor="media" className="pl-2">A media organisation, including investigative journalist organisations</label>
                        </div>
                        <div className="py-2">
                            <input type="checkbox" id="think" name="think" value="think" className="pr-3" onChange={handleOrganizationDescriptionChange} />
                            <label htmlFor="think" className="pl-2">A think tank, a research institution or a university</label>
                        </div>
                        <div className="py-2">
                            <input type="checkbox" id="trade" name="trade" value="trade" className="pr-3" onChange={handleOrganizationDescriptionChange} />
                            <label htmlFor="trade" className="pl-2">A trade union or a labour association</label>
                        </div>
                        <div className="py-2">
                            <input type="checkbox" id="faith" name="faith" value="faith" className="pr-3" onChange={handleOrganizationDescriptionChange} />
                            <label htmlFor="faith" className="pl-2">A faith based organisation</label>
                        </div>
                        <div className="py-2">
                            <input type="checkbox" id="business" name="business" value="business" className="pr-3" onChange={handleOrganizationDescriptionChange} />
                            <label htmlFor="business" className="pl-2">A business association or organisation</label>
                        </div>
                        <div className="py-2">
                            <input type="checkbox" id="public" name="public" value="public" className="pr-3" onChange={handleOrganizationDescriptionChange} />
                            <label htmlFor="public" className="pl-2">The Public Protector</label>
                        </div>
                        <div className="py-2">
                            <input type="checkbox" id="service" name="service" value="service" className="pr-3" onChange={handleOrganizationDescriptionChange} />
                            <label htmlFor="service" className="pl-2">The Public Service Commission</label>
                        </div>
                        <div className="py-2">
                            <input type="checkbox" id="human" name="human" value="human" className="pr-3" onChange={handleOrganizationDescriptionChange} />
                            <label htmlFor="human" className="pl-2">The South African Human Rights Commission</label>
                        </div>
                        <div className="py-2">
                            <input type="checkbox" id="auditor" name="auditor" value="auditor" className="pr-3" onChange={handleOrganizationDescriptionChange} />
                            <label htmlFor="auditor" className="pl-2">The Auditor General</label>
                        </div>
                        <div className="py-2">
                            <input type="checkbox" id="electoral" name="electoral" value="electoral" className="pr-3" onChange={handleOrganizationDescriptionChange} />
                            <label htmlFor="electoral" className="pl-2">The Independent Electoral Commission</label>
                        </div>
                        <div className="py-2">
                            <input type='checkbox' id='gender' name="gender" value="gender" className="pr-3" onChange={handleOrganizationDescriptionChange} />
                            <label htmlFor="gender" className="pl-2">The Commission for Gender Equality</label>
                        </div>
                        <div className="py-2">
                            <input type="checkbox" id="promotion" name="promotion" value="promotion" className="pr-3" onChange={handleOrganizationDescriptionChange} />
                            <label htmlFor="promotion" className="pl-2">The Commission for the Promotion & Protection of the Rights of Cultural, Religious and Linguistic Communities</label>
                        </div>
                    </div>
                </Card>
                <Card className="my-3">
                    <Title><Bold>Section 3: Registration</Bold></Title>
                </Card>
                <Card className="my-3">
                    <Text>Your name</Text>
                    <div className="pt-5">
                        <input type="text" id="name" name="name" placeholder="First Name" value={formValues.name} onChange={handleInputChange} />
                    </div>
                </Card>
                <Card className="my-3">
                    <Text>Name of your organisation</Text>
                    <div className="pt-5">
                        <input type="text" id="organisation" name="organization_name" placeholder="Organisation Name" value={formValues.organization_name} onChange={handleInputChange} />
                    </div>
                </Card>
                <Card className="my-3">
                    <Text>Name of senior person responsible for the activity for which technical assistance is being requested.</Text>
                    <div className="pt-5">
                        <input type="text" id="senior" name="senior_person" placeholder="Senior Person Name" value={formValues.senior_person} onChange={handleInputChange} />
                    </div>
                </Card>
                <Card className="my-3">
                    <Text>Your email address</Text>
                    <div className="pt-5">
                        <input type="text" id="email" name="email" placeholder="Email Address" value={formValues.email} onChange={handleInputChange} />
                    </div>
                </Card>
                <Card className="my-3">
                    <Text>Phone number of your organisation</Text>
                    <div className="pt-5">
                        <input type="text" id="phone" name="phone" placeholder="Phone Number" value={formValues.phone} onChange={handleInputChange} />
                    </div>
                </Card>
                <Card className="my-3">
                    <Text>Website of your organisation</Text>
                    <div className="pt-5">
                        <input type="text" id="website" name="website" placeholder="Website" value={formValues.website} onChange={handleInputChange} />
                    </div>
                </Card>
                <Card className="my-3">
                    <Text>Twitter handle of your organisation</Text>
                    <div className="pt-5">
                        <input type="text" id="twitter" name="twitter" placeholder="Twitter Handle" value={formValues.twitter} onChange={handleInputChange} />
                    </div>
                </Card>
                <Card className="my-3">
                    <Text>LinkedIn page of your organisation</Text>
                    <div className="pt-5">
                        <input type="text" id="linkedin" name="linkedin" placeholder="LinkedIn Page" value={formValues.linkedin} onChange={handleInputChange} />
                    </div>
                </Card>
                <Card className="my-3">
                    <Text>Facebook page of your organisation</Text>
                    <div className="pt-5">
                        <input type="text" id="facebook" name="facebook" placeholder="Facebook Page" value={formValues.facebook} onChange={handleInputChange} />
                    </div>
                </Card>
                <Button type="submit" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    )
}