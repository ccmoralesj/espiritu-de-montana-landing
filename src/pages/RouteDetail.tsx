import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Adventure } from "@/interfaces/Adventure";
import { allRoutes } from "@/db/routes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactThruWhatsapp, createSlug, formatDateLong, formatPrice, isEmptyObject } from "@/consts/utils";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { getIconComponent } from "@/consts/lucide-react-mapping";
import { Calendar, Camera, ChevronRight, MapPin, Mountain, Ticket } from "lucide-react";
import { useAdventureBySlug } from "@/hooks/api/useAdventureBySlug";
import LoadingAdventure from "@/components/LoadingAdventure";

const RouteDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const stateAdventure = location.state?.adventure ?? null;
  const { adventure: fetchedAdventure, loading: loadingAdventure, error } = useAdventureBySlug(slug, stateAdventure);

  const adventure = stateAdventure || fetchedAdventure;

  if (loadingAdventure) {
    console.log('Cargando aventura por Slug...')
    console.log(`The info we have ${JSON.stringify({
      stateAdventure,
      fetchedAdventure,
    }, null, 2)}`)
  }

  const adventureNotFound = (
    <>
      <div className="flex items-center justify-center my-40">
        <div className="text-center">
          <h1 className="font-title text-2xl text-secondary mb-4">Aventura no encontrada</h1>
          <Button className="font-body" onClick={() => navigate('/rutas')}>
            Regresar
          </Button>
        </div>
      </div>
    </>
  )

  // título para breadcrumb: preferimos adventure.title, si no mostramos slug o placeholder
  const breadcrumbTitle = adventure?.title ?? (loadingAdventure ? "Cargando..." : "Aventura");

  // Solo calcular valores dependientes de `adventure` cuando existe
  const { progressPercentage, includedAsComponents, notIncludedAsComponents } = useMemo(() => {
    if (!adventure) {
      return { progressPercentage: 0, includedAsComponents: [], notIncludedAsComponents: [] };
    }
    const riders = Number(adventure.riders ?? 0);
    const capacity = Number(adventure.capacity ?? 1);
    const progress = Math.round((riders / Math.max(1, capacity)) * 100);

    const included = (adventure.included ?? []).map(i => ({ ...i, reactItem: getIconComponent(i.reactItem) }));
    const notIncluded = (adventure.notIncluded ?? []).map(n => ({ ...n, reactItem: getIconComponent(n.reactItem) }));

    return { progressPercentage: progress, includedAsComponents: included, notIncludedAsComponents: notIncluded };
  }, [adventure]);

  return (
    <div className="relative min-h-screen bg-background">
      {/* <div className="absolute top-0 left-0 w-full h-52 bg-primary/10" /> */}
      <Header />

      {/* Main Content */}
      <main className="pt-28">
        <div className="container mx-auto px-4 mt-12">

          {/* Breadcrumb */}
          <Breadcrumb className="mb-8 z-80">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-muted-foreground hover:text-secondary">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/rutas" className="text-muted-foreground hover:text-secondary">
                  Rutas
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-secondary font-medium">
                  {breadcrumbTitle}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Si está cargando, mostramos un área principal con skeletons (mantiene el layout "vestido") */}
          <LoadingAdventure loadingAdventures={loadingAdventure} />
          {/* Si ya no carga y no hay aventura -> mostrar not found dentro del layout */}
          {!loadingAdventure && !adventure && adventureNotFound}

          {/* --- Responsive Layout (stacks on mobile, rows on lg+) --- */}
          {adventure && (
            <div className="flex flex-col gap-12 my-16 w-full">
              {/* First Row */}
              <section className="flex flex-col lg:flex-row gap-10 w-full items-start lg:items-stretch">
                {/* Left Side */}
                <div className="w-full lg:w-1/2 flex flex-col lg:justify-between">
                  {/* Title and Progress */}
                  <div className="mb-8">
                    <h1 className="font-title text-4xl xl:text-5xl text-secondary uppercase leading-tight tracking-wide mb-6">
                      {adventure.title}
                    </h1>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <div className="w-full lg:w-1/3 bg-gray-200 rounded-full h-2 mr-4">
                          <div
                            className="bg-adventure h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                        <span className="font-body text-md text-secondary whitespace-nowrap">
                          {progressPercentage}%
                        </span>
                      </div>
                    </div>

                    <p className="font-body text-md text-muted-foreground leading-relaxed mt-8 w-full lg:w-4/5 max-w-2xl">
                      {adventure.longDescription.split('\n\n')[0]}
                    </p>

                    {adventure.longDescription.split('\n\n').length > 1 && (
                      <p className="font-body text-lg text-muted-foreground leading-relaxed mt-4 w-full lg:w-4/5 max-w-2xl">
                        {adventure.longDescription.split('\n\n')[1]}
                      </p>
                    )}
                  </div>
                  {/* Price and Dates */}
                  <div className="flex flex-col items-start gap-8">
                    <div className="flex items-center gap-3">
                      <div className="p-2">
                        <Ticket className="w-8 h-8 text-primary" fill="none" />
                      </div>
                      <span className="font-body text-3xl text-secondary font-bold tracking-wide">
                        {formatPrice(adventure.price, adventure.currency)}
                      </span>
                    </div>


                    <div className="flex gap-4 flex-wrap">
                      <Button
                        variant="outline"
                        className="px-8 py-2 rounded-full border-secondary text-secondary hover:bg-primary hover:text-white"
                        onClick={() => contactThruWhatsapp({
                          adventureTitle: adventure.title,
                          price: adventure.price,
                          currency: adventure.currency,
                          date: adventure.firstDate,
                        })}
                      >
                        {formatDateLong(adventure.firstDate)}
                      </Button>
                      {adventure.secondDate &&
                        <>
                          <Button
                            variant="outline"
                            className="px-8 py-2 rounded-full border-secondary text-secondary hover:bg-primary hover:text-white"
                            onClick={() => contactThruWhatsapp({
                              adventureTitle: adventure.title,
                              price: adventure.price,
                              currency: adventure.currency,
                              date: adventure.secondDate,
                            })}
                          >
                            {formatDateLong(adventure.secondDate)}
                          </Button>
                        </>
                      }
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="w-full lg:w-1/2">
                  {/* Images and Map */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      {/* Main Image */}
                      <div className="relative">
                        <Card className="overflow-hidden border-0 shadow-lg rounded-3xl">
                          {adventure.image.large !== "" ?
                            (<img
                              src={adventure.image.large}
                              alt={adventure.title}
                              className="w-full h-64 object-cover"
                            />
                            ) : (
                              <ImagePlaceholder width="100%" height="16rem" />
                            )}
                        </Card>
                        <Button
                          variant="outline"
                          className="absolute font-body tracking-wide bottom-4 left-4 rounded-3xl bg-white/90 backdrop-blur-sm hover:bg-white border-gray-300"
                        >
                          <Camera className="w-4 h-4" />
                          FOTOS
                        </Button>
                      </div>

                      {/* Second Image */}
                      <div className="relative">
                        <Card className="overflow-hidden border-0 shadow-lg rounded-3xl">
                          {adventure.image.large !== "" ?
                            (<img
                              src={adventure.image.large}
                              alt={adventure.title}
                              className="w-full h-64 object-cover"
                            />
                            ) : (
                              <ImagePlaceholder width="100%" height="16rem" />
                            )}
                        </Card>
                        <Button
                          variant="outline"
                          className="absolute font-body tracking-wide bottom-4 left-4 rounded-3xl bg-white/90 backdrop-blur-sm hover:bg-white border-gray-300"
                        >
                          <Camera className="w-4 h-4" />
                          FOTOS
                        </Button>
                      </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-100 rounded-3xl flex items-center justify-center lg:h-full">
                      <div className="text-center text-gray-500">
                        <MapPin className="w-16 h-16 mx-auto mb-4" />
                        <p className="font-body text-lg">Mapa de la ruta</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Divider */}
              <div className="border-b border-border mb-12"></div>

              {/* Second Row */}
              <section className="flex flex-col lg:flex-row gap-8 w-full items-center lg:items-start justify-start lg:justify-between mb-12 lg-mb-0">
                {/* Stats Section */}
                <div className="flex flex-col items-center lg:items-start">
                  <h2 className="font-title text-2xl text-secondary uppercase mb-6 text-center tracking-wide">
                    ¡VIVAMOS EL MUNDO JUNTOS!
                  </h2>

                  <div className="flex justify-center gap-6 lg:gap-16">
                    <div className="flex items-center gap-1 lg:gap-2 text-center">
                      <Mountain className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
                      <p className="font-body text-lg text-secondary mb-1">{adventure.difficulty}</p>
                    </div>
                    <div className="flex items-center gap-1 lg:gap-2 text-center">
                      <MapPin className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
                      <p className="font-body text-lg text-secondary mb-1">{adventure.totalDistance} Km</p>
                    </div>
                    <div className="flex items-center gap-1 lg:gap-2 text-center">
                      <Calendar className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
                      <p className="font-body text-lg text-secondary mb-1">{adventure.duration} días</p>
                    </div>
                  </div>
                </div>

                {/* Package Selection */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                  <div className="flex flex-col w-full lg:w-1/3 items-center lg:items-start">
                    <h3 className="font-title w-fit text-2xl text-secondary uppercase mb-4 tracking-wide">
                      SEPARA TU CUPO
                    </h3>
                    <p className="font-body text-muted-foreground text-md w-full lg:w-3/4 text-center lg:text-start mb-4 lg:mb-0">
                      ¡No pierdas tu lugar para esta experiencia inolvidable!
                    </p>
                  </div>

                  <div className="w-full lg:w-2/3 flex flex-col lg:flex-row gap-4 items-center lg:items-start">
                    <a
                      onClick={() => contactThruWhatsapp({
                        adventureTitle: adventure.title,
                        price: adventure.price,
                        currency: adventure.currency,
                        date: adventure.firstDate,
                      })}
                      className="w-full lg:w-fit flex-1 px-2 py-8 bg-primary rounded-md cursor-pointer hover:bg-primary/90 transition"
                    >
                      <div className="flex flex-col items-center">
                        <p className="font-body text-3xl text-background">{formatPrice(adventure.price, adventure.currency)}</p>
                        <div className="flex mt-2 justify-between items-center">
                          <p className="font-body font-semibold text-lg text-secondary tracking-wide">PAQUETE 01</p>
                          <ChevronRight className="w-6 h-6 text-secondary ml-8" />
                        </div>
                      </div>
                    </a>

                    {adventure.alternativePrice &&
                      <>
                        <a
                          onClick={() => contactThruWhatsapp({
                            adventureTitle: adventure.title,
                            price: adventure.alternativePrice,
                            currency: adventure.currency,
                            date: adventure.firstDate,
                          })}
                          className="w-full lg:w-fit flex-1 px-2 py-8 bg-primary rounded-md cursor-pointer hover:bg-primary/90 transition"
                        >
                          <div className="flex flex-col items-center">
                            <p className="font-body text-3xl text-background">{formatPrice(adventure.alternativePrice, adventure.currency)}</p>
                            <div className="flex mt-2 justify-between items-center">
                              <p className="font-body font-semibold text-lg text-secondary tracking-wide">PAQUETE 02</p>
                              <ChevronRight className="w-6 h-6 text-secondary ml-8" />
                            </div>
                          </div>
                        </a>
                      </>
                    }
                  </div>
                </div>
              </section>

              {/* Divider */}
              <div className="border-b border-border mb-4 lg:mb-12"></div>

              {/* Third Row */}
              <section className="w-full bg-accent rounded-2xl shadow-lg">
                <div className="max-w-7xl mx-auto px-6 py-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Left: Large image card */}
                    <div className="relative">
                      <Card className="overflow-hidden border-0 shadow-lg rounded-3xl">
                        {adventure.image.large !== "" ?
                          (<img
                            src={adventure.image.large}
                            alt={adventure.title}
                            className="w-full h-[26rem] md:h-[32rem] object-cover rounded-3xl"
                          />
                          ) : (
                            <ImagePlaceholder width="100%" height="26rem" />
                          )}
                      </Card>

                      {/* VER FOTOS button (absolute over image, same look desktop & mobile) */}
                      <button
                        onClick={() => {/* abrir galería */ }}
                        className="font-body absolute bottom-6 left-6 inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-full font-semibold shadow-sm hover:bg-white transition"
                        aria-label="Ver fotos"
                      >
                        <Camera className="w-4 h-4" />
                        <span className="text-sm tracking-wide">VER FOTOS</span>
                      </button>
                    </div>

                    {/* Right: Tabs + content */}
                    <div>
                      {/* Tabs headers (visual: separators + active highlight) */}
                      {/* Divider */}
                      <div className="border-b border-border mb-4"></div>
                      <Tabs defaultValue="incluye" className="w-full">
                        <TabsList className="flex justify-start lg:justify-center items-center gap-6 border-0 bg-transparent p-0 overflow-x-auto scrollbar-hide whitespace-nowrap">
                          <TabsTrigger
                            value="incluye"
                            className="bg-transparent shadow-none rounded-none px-2 lg:px-0 py-0 font-body text-lg transition-all text-lg font-medium
                          data-[state=active]:bg-transparent 
                          data-[state=active]:border-b-2
                          data-[state=active]:border-primary
                          data-[state=active]:shadow-none
                          data-[state=active]:text-primary
                          border-b-2 border-transparent text-muted-foreground hover:text-secondary hover:font-medium hover:mb-1
                          whitespace-nowrap"
                          >
                            QUE INCLUYE
                          </TabsTrigger>
                          <span className="text-muted-foreground">•</span>
                          <TabsTrigger
                            value="no-incluye"
                            className="bg-transparent shadow-none rounded-none px-2 lg:px-0 py-0 font-body text-lg transition-all text-lg font-medium
                          data-[state=active]:bg-transparent 
                          data-[state=active]:border-b-2
                          data-[state=active]:border-primary
                          data-[state=active]:shadow-none
                          data-[state=active]:text-primary
                          border-b-2 border-transparent text-muted-foreground hover:text-secondary hover:font-medium hover:mb-1
                          whitespace-nowrap"
                          >
                            QUE NO INCLUYE
                          </TabsTrigger>
                        </TabsList>
                        {/* Divider */}
                        <div className="border-b border-border mt-4"></div>
                        {/* CONTENT: mantiene estructura responsive */}
                        <TabsContent value="incluye" className="mt-4">
                          <h3 className="font-body text-lg font-semibold text-secondary mb-6">
                            ¡Un amor infinito por rodar!
                          </h3>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {includedAsComponents.map((included, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <included.reactItem className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                                <span className="font-body text-muted-foreground leading-relaxed">
                                  {included.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="no-incluye" className="mt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {notIncludedAsComponents.map((notIncluded, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <notIncluded.reactItem className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                                <span className="font-body text-muted-foreground leading-relaxed">
                                  {notIncluded.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          )

          }
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RouteDetail;