import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift, faStar} from '@fortawesome/free-solid-svg-icons';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import CompareCard from "@/components/compare-card";
import UserReview from "@/components/user-review";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Divide} from "lucide-react";


export default function Home() {
  return (
      <>
          <div className={"h-screen max-h-screen bg-neutral-900"}>
              <header className={"flex justify-center"}>
                  <div className={"max-w-screen-lg p-8 flex justify-between w-full"}>
                      <Link className={"flex gap-2 items-center"} href={"/"}>
                          <Image src={"/icon.png"} alt={""} width={24} height={24}/>
                          <p className={"font-black"}>TranslateFast</p>
                      </Link>
                      <div className={"flex gap-6 font-semibold"}>
                          <Button variant={"link"}>
                            <Link href={"#Pricing"}>Pricing</Link>
                          </Button>
                          <Button variant={"link"}>
                            <Link href={"#demo"}>Demo</Link>
                          </Button>
                          <Button variant={"link"}>
                              <Link href={"#faq"}>FAQ</Link>
                          </Button>
                      </div>
                  </div>
              </header>
              <main className={"flex justify-center"}>
                  <section className={"w-full max-w-screen-lg p-8 flex gap-8 max-lg:flex-col pt-44 max-lg:pt-24"}>
                      <div className={"flex flex-col gap-8"}>
                          <div className={"flex flex-col gap-2"}>

                              <h1 className={"text-5xl font-black tracking-tighter"}>
                                  Focus on your app, not translations.</h1>
                              <p>
                                  Instantly generates and uploads all your transactions to the App Store,
                                  So you dont have to.
                              </p>
                          </div>
                          <div className={"flex flex-col gap-4"}>
                              <Button className={"flex gap-2 w-fit"}>
                                  <p>Get TranslateFast</p>
                                  <Image src={"/icon-alt.png"} alt={""} width={20} height={20}/>
                              </Button>
                              <div className={"flex gap-1 items-center"}>
                                  <FontAwesomeIcon
                                      icon={faGift}
                                      className={"text-green-500 w-3 h-4"}
                                  />
                                  <p>
                                <span className={"text-green-500"}>
                                    $20 off
                                </span> first 100 customers (99 left)
                                  </p>
                              </div>
                          </div>
                          <div className={"flex gap-4"}>
                              <div className={"flex -space-x-5"}>
                                  <Avatar>
                                      <AvatarImage src="https://picsum.photos/100"/>
                                      <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                  <Avatar>
                                      <AvatarImage src="https://picsum.photos/100"/>
                                      <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                  <Avatar>
                                      <AvatarImage src="https://picsum.photos/100"/>
                                      <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                  <Avatar>
                                      <AvatarImage src="https://picsum.photos/100"/>
                                      <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                  <Avatar>
                                      <AvatarImage src="https://picsum.photos/100"/>
                                      <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                              </div>
                              <div className={""}>
                                  <div className={"flex gap-[2px] text-amber-500 h-4 fit"}>
                                      <FontAwesomeIcon icon={faStar}/>
                                      <FontAwesomeIcon icon={faStar}/>
                                      <FontAwesomeIcon icon={faStar}/>
                                      <FontAwesomeIcon icon={faStar}/>
                                      <FontAwesomeIcon icon={faStar}/>
                                  </div>
                                  <p className={"text-sm pt-2"}>
                                      121 Businesses trust TranslateFast
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className={"rounded-lg overflow-hidden"}>
                          <Image src={"https://picsum.photos/800/500"} alt={""} width={800} height={500}/>
                      </div>
                  </section>
              </main>
          </div>
          <div className={"py-24 flex flex-col items-center gap-10"}>
              <h2 className={"text-4xl font-bold text-center"}>
                  Tired of manually translating the released notes?
              </h2>
              <div className={"flex max-lg:flex-col gap-4 w-full p-8"}>
                  <CompareCard
                      title={"Translations without TranslateFast"}
                      variant={"negative"}
                      className={"flex flex-grow"}
                  >

                      Some text

                      <div>hello Every one this is abu Shahma Ansari a second year grad</div>
                      <div>hello Every one this is abu Shahma Ansari a second year grad</div>
                      <div>hello Every one this is abu Shahma Ansari a second year grad</div>
                      <div>hello Every one this is abu Shahma Ansari a second year grad</div>
                      <div>hello Every one this is abu Shahma Ansari a second year grad</div>
                  </CompareCard>
                  <CompareCard
                      title={"Translations with TranslateFast"}
                      variant={"positive"}
                      className={"flex flex-grow"}
                  >
                      Some text
                      <div>hello Every one this is abu Shahma Ansari a second year grad</div>
                      <div>hello Every one this is abu Shahma Ansari a second year grad</div>
                      <div>hello Every one this is abu Shahma Ansari a second year grad</div>
                      <div>hello Every one this is abu Shahma Ansari a second year grad</div>
                      <div>hello Every one this is abu Shahma Ansari a second year grad</div>
                  </CompareCard>
              </div>
              <UserReview
                  message={"I loved your product! It saved me so much time and effort, it's the best thing in the world blah blah blah."}
                  image="https://picsum.photos/100"
                  name={"Shahma Ansari"}
                  title={"8100 Followers on Twitter"}
              />
          </div>

          <div className={"justify-center py-14"}>
              <div className={"flex flex-col items-center gap-10"}>
                  <div>
                      <h2 className={"text-4xl font-bold text-center pb-2"}>How it Works</h2>
                      <div className={"flex gap-8 max-md:flex-col"}>
                          <div>
                              <Accordion type="single" collapsible>
                                  <AccordionItem value="item-1">
                                      <AccordionTrigger>
                                          1. Connect your App Store, Connect your API Key?
                                      </AccordionTrigger>
                                      <AccordionContent>
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                                          et nisi dolorem excepturi sit, accusamus rerum laudantium hic culpa
                                          accusantium necessitatibus eos quo provident
                                      </AccordionContent>
                                  </AccordionItem>
                                  <AccordionItem value="item-2">
                                      <AccordionTrigger>
                                          2. Choose your translation provider
                                      </AccordionTrigger>
                                      <AccordionContent>
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                                          et nisi dolorem excepturi sit, accusamus rerum laudantium hic culpa
                                          accusantium necessitatibus eos quo provident
                                      </AccordionContent>
                                  </AccordionItem>
                                  <AccordionItem value="item-3">
                                      <AccordionTrigger>
                                          3. Upload your source translations
                                      </AccordionTrigger>
                                      <AccordionContent>
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                                          et nisi dolorem excepturi sit, accusamus rerum laudantium hic culpa
                                          accusantium necessitatibus eos quo provident
                                      </AccordionContent>
                                  </AccordionItem>
                                  <AccordionItem value="item-4">
                                      <AccordionTrigger>
                                          4. Publish!
                                      </AccordionTrigger>
                                      <AccordionContent>
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                                          et nisi dolorem excepturi sit, accusamus rerum laudantium hic culpa
                                          accusantium necessitatibus eos quo provident
                                      </AccordionContent>
                                  </AccordionItem>
                              </Accordion>
                          </div>
                          <div>
                              <Image
                                  src={"https://picsum.photos/400/300"}
                                  alt={""}
                                  width={300}
                                  height={400}
                                  className={"rounded-lg object-contain"}
                              />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className={"justify-center py-14"}>
              <div className={"flex gap-4 px-8"}>
                  <div className={"flex w-full"}>
                      <Image
                          src={"https://picsum.photos/800/500"}
                          alt={""}
                          height={500}
                          width={800}
                      />
                  </div>
                  <div className={"flex w-full"}>
                      <h2 className={"text-4xl font-bold pb-4"}>Bring your own provider</h2>
                  </div>
              </div>
          </div>
          <footer></footer>
      </>
  );
}
