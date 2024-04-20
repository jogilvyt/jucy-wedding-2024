import * as React from "react";
import { Button } from "./components/button";
import ThisIsIt from "./assets/this-is-it.png";
import CheersOne from "./assets/cheers-one.png";
import CheersTwo from "./assets/cheers-two.png";
import Squiggle from "./assets/squiggle.png";
import TheRoughPlan from "./assets/the-rough-plan.png";
import TheRoughPlanMobile from "./assets/the-rough-plan-mobile.png";
import GettingThereMobile from "./assets/getting-there-mobile.png";
import StayingNearby from "./assets/staying-nearby.png";
import StayingNearbyMobile from "./assets/staying-nearby-mobile.png";
import Questions from "./assets/questions.png";
import QuestionsMobile from "./assets/questions-mobile.png";
import Slugs from "./assets/slugs.png";
import Arrow from "./assets/arrow.png";
import JPlusL from "./assets/j-plus-l.png";
import { Container } from "./components/container";
import { MapPinIcon } from "./components/map-pin-icon";
import { LinkIcon } from "./components/link-icon";
import { RoughNotation } from "react-rough-notation";
import { useInView, useReducedMotion } from "framer-motion";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { TConductorInstance } from "react-canvas-confetti/dist/types";

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function EveningGuests() {
  const [conductor, setConductor] = React.useState<TConductorInstance>();
  const [isRsvpDisabled, setIsRsvpDisabled] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(() => {
    if (typeof window === "undefined") return false;
    return window.scrollY > 0;
  });
  const [activeCheers, setActiveCheers] = React.useState<
    "cheers-one" | "cheers-two"
  >("cheers-one");

  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveCheers(prev =>
        prev === "cheers-one" ? "cheers-two" : "cheers-one"
      );
    }, 400);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  React.useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
    setConductor(conductor);
  };

  const onRsvpClick = async () => {
    setIsRsvpDisabled(true);
    conductor?.shoot();
    await wait(700);
    conductor?.shoot();
    await wait(400);
    conductor?.shoot();
    await wait(2000);
    window.location.assign("https://lucyivesmilford.typeform.com/to/ReIhX3oo");
  };

  const navLinkClassNames =
    "after:content=[''] relative after:absolute after:left-0 after:right-0 after:h-0.5 after:bg-dark-green after:bottom-[-2px] after:transition-all after:duration-300 after:transform after:scale-x-0 hover:after:scale-x-100 after:opacity-75 text-xl lg:text-xl";

  return (
    <>
      <header
        className={`bg-white py-4 md:py-6 px-8 sticky top-0 z-10 transition-shadow duration-400 ${
          isScrolled ? "shadow-lg" : "shadow-none"
        }`}
      >
        <nav className="max-w-[1300px] mx-auto flex justify-between align-center">
          <a href="#top" className="group md:hidden">
            <img
              src={JPlusL}
              alt="J + L"
              className="w-12 group-hover:rorate-3"
            />
          </a>
          <ul className="gap-x-8 lg:gap-x-16 text-dark-green items-center hidden md:flex">
            <li>
              <a href="#top" className="group">
                <img
                  src={JPlusL}
                  alt="J + L"
                  className="w-16 group-hover:-rotate-12 transition-transform duration-300"
                />
              </a>
            </li>
            <li>
              <a href="#timings" className={navLinkClassNames}>
                Timings
              </a>
            </li>
            <li>
              <a href="#travel" className={navLinkClassNames}>
                Travel
              </a>
            </li>
            <li>
              <a href="#accommodation" className={navLinkClassNames}>
                Accommodation
              </a>
            </li>
            <li>
              <a href="#faq" className={navLinkClassNames}>
                FAQ
              </a>
            </li>
          </ul>
          <Button
            onClick={onRsvpClick}
            disabled={isRsvpDisabled}
            className="ml-auto my-auto"
          >
            RSVP
          </Button>
        </nav>
      </header>
      <a href="#top" />
      <main className="scroll-smooth">
        <section className="pt-6 pb-20 md:py-24 cursor-tada">
          <Container width="wide">
            <div className="grid grid-cols-2 text-dark-green">
              <div className="text-center col-span-2 md:col-span-1 md:mt-12 order-2 md:order-1">
                <img
                  src={ThisIsIt}
                  alt="This is it"
                  className="max-w-full hidden md:block"
                />
                <h1 className="italic text-xl">LUCY &amp; JACK GET WED</h1>
                <img
                  src={Squiggle}
                  alt=""
                  className="mx-auto max-w-[350px] w-full my-5"
                />
                <p className="text-xl">
                  <RoughNotation
                    show
                    type="circle"
                    animate
                    animationDelay={600}
                    animationDuration={1000}
                    color="#DE6279"
                    padding={16}
                    strokeWidth={3}
                  >
                    13 07 24
                  </RoughNotation>
                </p>
              </div>
              <div className="col-span-2 md:col-span-1 order-1 md:order-2 relative -mt-4">
                <img
                  src={CheersOne}
                  alt=""
                  className={
                    activeCheers === "cheers-one" ? "opacity-1" : "opacity-0"
                  }
                />
                <img
                  src={CheersTwo}
                  alt=""
                  className={`absolute top-0 left-0 w-full ${
                    activeCheers === "cheers-two" ? "opacity-1" : "opacity-0"
                  }`}
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="bg-beige py-14 md:py-28 text-dark-green text-base md:text-xl cursor-cheers">
          <Container width="medium">
            <div className="text-center max-w-[260px] mx-auto md:max-w-full">
              <p className="mb-3">
                We'd love you to join us at our wedding reception for drinks and
                dancing.
              </p>
              <p className="mb-8 md:mb-8 font-medium">
                Please RSVP by 17<sup>th</sup> May by clicking the link below.
              </p>
              <Button onClick={onRsvpClick} disabled={isRsvpDisabled}>
                RSVP
              </Button>
            </div>
          </Container>
        </section>
        <section
          className="py-12 md:py-20 cursor-calendar scroll-mt-24"
          id="timings"
        >
          <Container width="medium">
            <h2 className="sr-only">The Rough Plan</h2>
            <picture>
              <source media="(max-width: 850px)" srcSet={TheRoughPlanMobile} />
              <source media="(min-width: 851px)" srcSet={TheRoughPlan} />
              <img
                src={TheRoughPlan}
                alt=""
                className="max-w-full w-full mb-8 md:mb-12"
              />
            </picture>
            <div className="flex flex-col gap-y-10 md:gap-y-20 text-dark-green relative">
              <TimingsSection
                timing="Saturday 13th July, 6:30pm - midnight"
                isoTime="2024-07-13T18:30:00.000"
              >
                <div className="flex flex-col gap-y-3 mb-4  text-base md:text-base">
                  <h3 className="text-xl md:text-xl italic mb-2">
                    Our wedding reception!
                  </h3>
                  <p>
                    Please arrive at Hawthbush Farm <b>from 6:30pm.</b>
                  </p>
                  <p>
                    There'll be drinks, dancing and a light evening snack (mac &
                    cheese pots!). Wear something that makes you feel good and
                    bring your best dance moves.
                  </p>
                  <p>
                    If you'd like to get there a bit earlier, there's a taproom
                    right next door to our venue (Gun Brewery) where you can
                    grab a drink.
                  </p>
                  <p>
                    Please kindly arrange for taxis by midnight. Local taxi
                    numbers can be found further down this page.
                  </p>
                </div>
                <TimingsLink
                  href="https://maps.app.goo.gl/AzuhCTs33EuS79ty9"
                  icon={<MapPinIcon />}
                >
                  Hawthbush Farm, Gun Hill, East Sussex, TN21 0JX
                </TimingsLink>
                <TimingsLink
                  href="https://www.hawthbushfarm.co.uk/events/"
                  icon={<LinkIcon />}
                >
                  hawthbushfarm.co.uk/events
                </TimingsLink>
              </TimingsSection>
              <img
                src={Arrow}
                alt=""
                className="absolute top-[-130px] right-[-200px] hidden xl:block"
              />
            </div>
          </Container>
        </section>
        <section
          className="bg-lilac py-12 lg:py-24 text-beige cursor-taxi scroll-mt-24"
          id="travel"
        >
          <Container width="medium">
            <h2 className="sr-only">Getting there</h2>
            <picture>
              <source media="(max-width: 850px)" srcSet={GettingThereMobile} />
              <source media="(min-width: 851px)" srcSet={GettingThereMobile} />
              <img
                src={GettingThereMobile}
                alt=""
                className="max-w-full w-full md:mx-auto mb-6 md:mb-10"
              />
            </picture>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-0">
              <div className="cursor-car">
                <h3 className="font-medium text-xl md:text-xl mb-4">By car</h3>
                <div className="text-base md:text-base flex flex-col gap-y-4">
                  <p>
                    Hawthbush Farm is pretty easy to get to using Google Maps:
                  </p>
                  <p>
                    <b className="font-medium">
                      Hawthbush Farm, Gun Hill,
                      <br />
                      Heathfield TN21 0JY
                    </b>
                  </p>
                  <p>
                    The farm is next door to Gun Brewery. When you turn off the
                    road (Gun Hill - left turn if you're coming from the north,
                    right turn if you're coming from the south), drive through
                    the gate that's straight ahead of you. There are signs at
                    the entrance.
                  </p>
                  <p>
                    Once through the gate, the wonky barn is right in front of
                    you and the car park to your left. You should see (and
                    hear!) us from there.
                  </p>
                </div>
              </div>
              <div className="cursor-train">
                <h3 className="font-medium text-xl md:text-xl mb-4">
                  By train
                </h3>
                <div className="text-base md:text-base flex flex-col gap-y-4">
                  <p>
                    The nearest mainline stations are Eastbourne, Uckfield and
                    Lewes (pretty much equidistant).
                  </p>
                  <p>
                    Please let us know if you're getting the train and we may
                    able to match-make you with someone else to grab a taxi or
                    lift.
                  </p>
                  <p>
                    Local taxis should be familiar with the venue, but just in
                    case, the full address is:
                  </p>
                  <p>
                    <b className="font-medium">
                      Hawthbush Farm, Gun Hill,
                      <br />
                      Heathfield TN21 0JY
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section
          className="py-12 md:py-24 text-dark-green cursor-snooze scroll-mt-24"
          id="accommodation"
        >
          <Container width="wide">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-x-16">
              <div className="md:col-span-4 lg:col-span-1">
                <h2 className="sr-only">Accommodation</h2>
                <picture>
                  <source
                    media="(max-width: 850px)"
                    srcSet={StayingNearbyMobile}
                  />
                  <source media="(min-width: 851px)" srcSet={StayingNearby} />
                  <img
                    src={StayingNearby}
                    alt=""
                    className="max-w-full md:w-full lg:w-auto lg:pr-12 mb-3 md:mb-10 lg:mb-0"
                  />
                </picture>
              </div>
              <div className="mt-6 md:col-span-2 lg:col-span-1">
                <h3 className="font-medium text-xl md:text-xl mb-3 md:mb-4">
                  Hotels
                </h3>
                <ul className="text-base md:text-base flex flex-col gap-y-4 md:gap-y-7">
                  <li>
                    <a
                      href="https://www.premierinn.com/gb/en/hotels/england/east-sussex/eastbourne/eastbourne-polegate.html"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:underline"
                    >
                      <b className="font-medium">Premier Inn, Polegate</b>
                    </a>
                    <br />
                    <i>(15 minute drive - you know what you're getting)</i>
                  </li>
                  <li>
                    <a
                      href="https://www.travelodge.co.uk/hotels/32/Hellingly-Eastbourne-hotel"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:underline"
                    >
                      <b className="font-medium">Travelodge, Hellingly</b>
                    </a>
                    <br />
                    <i>(8 minute drive - cheap &amp; cheerful)</i>
                  </li>
                  <li>
                    <a
                      href="https://www.porthotel.co.uk/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:underline"
                    >
                      <b className="font-medium">Port Hotel, Eastbourne</b>
                    </a>
                    <br />
                    <i>(20 minute drive - boutique, seafront)</i>
                  </li>
                  <li>
                    <a
                      href="https://www.saltmarshfarmhouse.co.uk/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:underline"
                    >
                      <b className="font-medium">Saltmarsh Farmhouse</b>
                    </a>
                    <br />
                    <i>
                      (25 minute drive - cottagey, Seven Sisters Country Park)
                    </i>
                  </li>
                  <li>Plus, loads of lovely Airbnbs!</li>
                </ul>
              </div>
              <div className="mt-6 md:col-span-2 lg:col-span-1">
                <h3 className="font-medium text-xl md:text-xl mb-3 md:mb-4">
                  Taxis
                </h3>
                <ul className="text-base md:text-base flex flex-col gap-y-4 md:gap-y-7">
                  <li>
                    <b className="font-medium">Lewes Town Taxis</b> - 01273
                    474747
                  </li>
                  <li>
                    <b className="font-medium">Brighton Taxis</b> - 01273 358545
                  </li>
                  <li>
                    <b className="font-medium">Eastbourne 720 Taxis</b> - 01323
                    720720
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
        <section
          className="bg-light-green pt-8 md:pt-14 pb-12 md:pb-28 text-dark-green cursor-questions scroll-mt-24"
          id="faq"
        >
          <Container width="wide">
            <h2 className="sr-only">Questions</h2>
            <picture>
              <source media="(max-width: 850px)" srcSet={QuestionsMobile} />
              <source media="(min-width: 851px)" srcSet={Questions} />
              <img
                src={Questions}
                alt=""
                className="lg:max-w-[810px] w-full lg:w-auto max-w-full lg:mx-auto mb-9 md:mb-10"
              />
            </picture>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 md:gap-y-10">
              <div>
                <h3 className="text-xl md:text-xl font-medium mb-2 md:mb-4">
                  What should I wear?
                </h3>
                <p className="text-base md:text-base">
                  Wear something that makes you feel good. We really don't mind
                  what you wear, we'll just be really happy to see you. If it
                  helps, we'll both be in fairly relaxed attire - Jack won't be
                  wearing a tie and Lucy is highly likely to take her shoes off
                  after an hour.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-xl font-medium mb-2 md:mb-4">
                  Where should I park?
                </h3>
                <p className="text-base md:text-base">
                  There's plenty of parking on site. You should be able to see
                  (and hear) us from the car park.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-xl font-medium mb-2 md:mb-4">
                  Can I leave my car overnight?
                </h3>
                <p className="text-base md:text-base">
                  Yup, of course! Just please make sure you collect your car by
                  12 o'clock the next day.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className="bg-pink grid grid-cols-1 md:grid-cols-2 text-beige text-base md:text-base cursor-hug">
          <div className="flex flex-col h-full items-center justify-center gap-y-2 md:gap-y-4 max-w-[600px] mx-auto text-center py-16 px-8">
            <h2 className="font-medium">
              Phew - you've finally reached the bottom of the page.
            </h2>
            <p>
              We really hope you can join us in July and can't wait to give you
              all a big squeeze.
            </p>
            <p>
              If you have any questions or need anything, please text or call
              one of us.
            </p>
            <p>Big love, </p>
            <p>Lu & Jack xxx</p>
          </div>
          <div className="flex w-full h-full">
            <img
              src={Slugs}
              alt="Jack and Lucy, slugs together"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </main>
      <Fireworks onInit={onInit} />
    </>
  );
}

interface TimingsSectionProps {
  children: React.ReactNode;
  timing: string;
  isoTime: string;
}

function TimingsSection({ timing, isoTime, children }: TimingsSectionProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: "all",
  });

  return (
    <div
      className="max-w-[640px] mx-auto flex flex-col gap-y-3 md:gap-y-3"
      ref={ref}
    >
      <time dateTime={isoTime} className="text-xl md:text-xl font-medium">
        <RoughNotation
          show={isInView}
          type="underline"
          iterations={6}
          animate
          animationDelay={1000}
          animationDuration={2000}
          color="#DE6279"
          strokeWidth={2}
        >
          {timing}
        </RoughNotation>
      </time>
      {children}
    </div>
  );
}

interface TimingsLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon: React.ReactNode;
}

function TimingsLink({ children, icon: Icon, ...props }: TimingsLinkProps) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="flex gap-x-5 items-center mb-1 text-pink italic text-base md:text-base hover:underline"
      {...props}
    >
      <span className="h-[30px] justify-center flex shrink-0 w-[40px]">
        {Icon}
      </span>
      {children}
    </a>
  );
}
