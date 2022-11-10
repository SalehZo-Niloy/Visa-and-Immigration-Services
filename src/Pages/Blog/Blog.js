import { Accordion } from 'flowbite-react';
import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blogs');

    return (
        <div>
            <h1 className='text-2xl font-semibold text-zinc-800 text-center my-4 w-5/6 mx-auto'>Some Frequently Asked Questions</h1>
            <Accordion className='w-11/12 lg:w-10/12 mx-auto'>
                <Accordion.Panel>
                    <Accordion.Title>
                        Difference between SQL and NoSQL
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-zinc-700">
                            When choosing a modern database, one of the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both are viable options, there are key differences between the two that users must keep in mind when making a decision.
                            <br /> <br />
                            Here, we break down the most important distinctions and discuss the best SQL and NoSQL database systems available.
                            <br />
                            The five critical differences between SQL vs NoSQL are:
                            <br />
                        </p>
                        <ol className='list-decimal text-zinc-700 ml-4'>
                            <li>
                                SQL databases are relational, NoSQL databases are non-relational.

                            </li>
                            <li>
                                SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.

                            </li>
                            <li>
                                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.

                            </li>
                            <li>
                                SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.

                            </li>
                            <li>
                                SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.

                            </li>
                        </ol>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is JWT, and how does it work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-zinc-700">
                            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                            <br /> <br />
                            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand.
                            <br /> <br />

                            A JWT is a string made up of three parts, separated by dots (.) , and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                            <br />
                            Once decoded, you will get two JSON strings:
                            <br />
                        </p>
                        <ol className='list-decimal text-zinc-700 ml-4'>
                            <li>
                                The header and the payload.

                            </li>
                            <li>
                                The signature.

                            </li>
                        </ol>
                        <p className="mb-2 text-zinc-700">
                            <br />
                            The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                            <br /><br />
                            The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                            <br /><br />
                            The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the is suer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is the difference between javascript and NodeJS?
                    </Accordion.Title>
                    <Accordion.Content>
                        <ol className='list-decimal text-zinc-700 ml-4'>
                            <li>
                                JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted.
                                Node.js, on the other hand, is a V8-based server-side programming language.
                                As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications.

                            </li>
                            <li>
                                JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed.
                                Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.

                            </li>
                            <li>
                                Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser.
                                Node.js, on the other hand, only enables the V8 engine.

                            </li>
                            <li>
                                A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.

                                Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.

                            </li>
                            <li>
                                The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.

                                Node.js, on the other hand, offers node package management with over thousands of modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things.
                            </li>
                        </ol>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        How does NodeJS handle multiple requests at the same time?                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-zinc-700">
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                            <br /><br />
                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Blog;