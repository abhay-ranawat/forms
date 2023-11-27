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
                <form>
                    <Card className="my-3">
                        <Title><Bold>Section 1: Expression of Interest</Bold></Title>
                    </Card>
                    <Card className="my-3">
                        <Text>
                            Is your organisation interested in applying for Technical Assistance from the Facility?
                        </Text>
                        <div className="pt-5">
                            <input type="radio" id="yes" name="yes" value="yes" className="pr-3" />
                            <label htmlFor="yes" className="pl-2">Yes</label>
                        </div>
                    </Card>
                    <Card className="my-3">
                        <Title><Bold>Section 2: Eligibility</Bold></Title>
                    </Card>
                    <Card className="my-3">
                        <Text>Which type of organisation are you?</Text>
                        <div className="pt-5">
                            <div className="py-2">
                                <input type="checkbox" id="civil" name="civil" value="civil" className="pr-3" />
                                <label htmlFor="civil" className="pl-2">Civil Society organisation</label>
                            </div>
                            <div className="py-2">

                                <input type="checkbox" id="chapter" name="chapter" value="chapter" className="pr-3" />
                                <label htmlFor="chapter" className="pl-2">Chapter 9 Institution</label>
                            </div>
                            <div className="py-2">
                                <input type="checkbox" id="public" name="public" value="public" className="pr-3" />
                                <label htmlFor="public" className="pl-2">Public Service Commission</label>
                            </div>
                        </div>
                    </Card>
                    <Card className="my-3">
                        <Text>Which of the following best describes your organisation?</Text>
                        <div className="pt-5">
                            <div className="py-2">
                                <input type="checkbox" id="association" name="association" value="association" className="pr-3" />
                                <label htmlFor="association" className="pl-2">An association, non-governmental institution, women's organisation, community-based</label>
                            </div>
                            <div className="py-2">

                                <input type="checkbox" id="media" name="media" value="media" className="pr-3" />
                                <label htmlFor="media" className="pl-2">A media organisation, including investigative journalist organisations</label>
                            </div>
                            <div className="py-2">
                                <input type="checkbox" id="think" name="think" value="think" className="pr-3" />
                                <label htmlFor="think" className="pl-2">A think tank, a research institution or a university</label>
                            </div>
                            <div className="py-2">
                                <input type="checkbox" id="trade" name="trade" value="trade" className="pr-3" />
                                <label htmlFor="trade" className="pl-2">A trade union or a labour association</label>
                            </div>
                            <div className="py-2">
                                <input type="checkbox" id="faith" name="faith" value="faith" className="pr-3" />
                                <label htmlFor="faith" className="pl-2">A faith based organisation</label>
                            </div>
                            <div className="py-2">
                                <input type="checkbox" id="business" name="business" value="business" className="pr-3" />
                                <label htmlFor="business" className="pl-2">A business association or organisation</label>
                            </div>
                            <div className="py-2">
                                <input type="checkbox" id="public" name="public" value="public" className="pr-3" />
                                <label htmlFor="public" className="pl-2">The Public Protector</label>
                            </div>
                            <div className="py-2">
                                <input type="checkbox" id="service" name="service" value="service" className="pr-3" />
                                <label htmlFor="service" className="pl-2">The Public Service Commission</label>
                            </div>
                            <div className="py-2">
                                <input type="checkbox" id="human" name="human" value="human" className="pr-3" />
                                <label htmlFor="human" className="pl-2">The South African Human Rights Commission</label>
                            </div>
                            <div className="py-2">
                                <input type="checkbox" id="auditor" name="auditor" value="auditor" className="pr-3" />
                                <label htmlFor="auditor" className="pl-2">The Auditor General</label>
                            </div>
                            <div className="py-2">
                                <input type="checkbox" id="electoral" name="electoral" value="electoral" className="pr-3" />
                                <label htmlFor="electoral" className="pl-2">The Independent Electoral Commission</label>
                            </div>
                            <div className="py-2">
                                <input type="checkbox" id="gender"
                                    name="gender"
                                    value="gender"
                                    className="pr-3"
                                />
                                <label htmlFor="gender" className="pl-2">
                                    The Commission for Gender Equality
                                </label>
                            </div>
                            <div className="py-2">
                                <input
                                    type="checkbox"
                                    id="promotion"
                                    name="promotion"
                                    value="promotion"
                                    className="pr-3"
                                />
                                <label htmlFor="promotion" className="pl-2">
                                    The Commission for the Promotion & Protection of the Rights of Cultural, Religious and Linguistic Communities
                                </label>
                            </div>
                        </div>
                    </Card>
                    <Card className="my-3">
                        <Title><Bold>Section 3: Registration</Bold></Title>
                    </Card>
                    <Card className="my-3">
                        <Text>Your name</Text>
                        <div className="pt-5">
                            <input type="text" id="name" name="name" placeholder="First Name" />
                        </div>
                    </Card>
                    <Card className="my-3">
                        <Text>Name of your organisation</Text>
                        <div className="pt-5">
                            <input type="text" id="organisation" name="organisation" placeholder="Organisation Name" />
                        </div>
                    </Card>
                    <Card className="my-3">
                        <Text>Name of senior person responsible for the activity for which technical assistance is being requested.</Text>
                        <div className="pt-5">
                            <input type="text" id="senior" name="senior" placeholder="Senior Person Name" />
                        </div>
                    </Card>
                    <Card className="my-3">
                        <Text>Your email address</Text>
                        <div className="pt-5">
                            <input type="text" id="email" name="email" placeholder="Email Address" />
                        </div>
                    </Card>
                    <Card className="my-3">
                        <Text>Phone number of your organisation</Text>
                        <div className="pt-5">
                            <input type="text" id="phone" name="phone" placeholder="Phone Number" />
                        </div>
                    </Card>
                    <Card className="my-3">
                        <Text>Website of your organisation</Text>
                        <div className="pt-5">
                            <input type="text" id="website" name="website" placeholder="Website" />
                        </div>
                    </Card>
                    <Card className="my-3">
                        <Text>Twitter handle of your organisation</Text>
                        <div className="pt-5">
                            <input type="text" id="twitter" name="twitter" placeholder="Twitter Handle" />
                        </div>
                    </Card>
                    <Card className="my-3">
                        <Text>LinkedIn page of your organisation</Text>
                        <div className="pt-5">
                            <input type="text" id="linkedin" name="linkedin" placeholder="LinkedIn Page" />
                        </div>
                    </Card>
                    <Card className="my-3">
                        <Text>Facebook page of your organisation</Text>
                        <div className="pt-5">
                            <input type="text" id="facebook" name="facebook" placeholder="Facebook Page" />
                        </div>
                    </Card>
                    <Button className="my-3">
                        <Link href="/apply/apply">
                            Submit
                        </Link>
                    </Button>
                </form>
            </div>
        </div>
    )
};
