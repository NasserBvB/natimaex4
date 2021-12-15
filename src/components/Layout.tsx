import React, { PropsWithChildren } from "react";
import {
  BsFacebook,
  BsInstagram, BsTelegram,
  BsTwitter,
  BsYoutube
} from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import Drawer from "./shared/drawer";
import { DropDown } from "./shared/dropdown";
import { colors } from "./styles/colors";
import {
  ContentWrapper,
  FooterContactForm,
  FooterContactFormInput,
  FooterContactFormTextArea,
  FooterLinks,
  FooterSocialMedia,
  FooterWrapper,
  HeaderWrapper,
  LayoutWrapper,
  Links,
  Search,
  SocialMediaBox
} from "./styles/layout";

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <LayoutWrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </LayoutWrapper>
  );
}

export const Header = () => {
  const isExtraSmall = useMediaQuery({
    minWidth: "0px",
    maxWidth: "599px",
  });
  const isSmall = useMediaQuery({ minWidth: "600px", maxWidth: "1279px" });
  const isMedium = useMediaQuery({ minWidth: "1280px", maxWidth: "1919px" });
  const isLarge = useMediaQuery({ minWidth: "1920px", maxWidth: "2559px" });
  const isExtraLarge = useMediaQuery({ minWidth: "2560px" });
  const LinksList = () => (
    <Links
      flexDirection={isExtraLarge || isLarge || isMedium ? "row" : "column"}
    >
      <Link to="/">NATIMAEX</Link>
      <DropDown title="Climatiseurs">
        <DropDown
          title="Debout au sol"
          color={colors.primary}
          disposion="horizontal"
        >
          <Link to="/climatiseurs/onduleur">Onduleur</Link>
          <Link to="/climatiseurs/non-onduleur">Non Onduleur</Link>
        </DropDown>
        <DropDown
          title="Climatiseur split"
          color={colors.primary}
          disposion="horizontal"
        >
          <Link to="/climatiseurs/onduleur">Onduleur</Link>
          <Link to="/climatiseurs/non-onduleur">Non Onduleur</Link>
        </DropDown>
      </DropDown>
      <DropDown title="Réfrigérateurs">
        <Link to="/climatiseurs/onduleur">Monture supérieure</Link>
        <Link to="/climatiseurs/onduleur">Porte simple</Link>
        <Link to="/climatiseurs/onduleur">Cote à cote</Link>
        <Link to="/climatiseurs/onduleur">Porte française</Link>
      </DropDown>
      <DropDown title="Appareils ménagers">
        <Link to="/climatiseurs/onduleur">Distributeurs d'eau</Link>
      </DropDown>
      <DropDown title="Machines à laver">
        <Link to="/climatiseurs/onduleur">Séchoir à cuve simple</Link>
        <Link to="/climatiseurs/onduleur">Laveuse à cuve simple</Link>
        <Link to="/climatiseurs/onduleur">Baignoire jumelle</Link>
        <Link to="/climatiseurs/onduleur">Chargement frontal automatique</Link>
        <Link to="/climatiseurs/onduleur">
          Chargement par le haut automatique
        </Link>
      </DropDown>
      <DropDown title="Congélateurs">
        <Link to="/climatiseurs/onduleur">Congélateurs verticaux</Link>
        <Link to="/climatiseurs/onduleur">Congélateurs coffres</Link>
      </DropDown>
      <Link to="/climatiseurs/onduleur">Forfait mariage</Link>
      <Link to="/climatiseurs/onduleur">Télévision LED</Link>
    </Links>
  );

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <HeaderWrapper>
      {(isMedium || isExtraLarge || isLarge) && <LinksList />}
      {(isSmall || isExtraSmall) && (
        <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <LinksList />
        </Drawer>
      )}
      {(isSmall || isExtraSmall) && (
        <IoMdMenu
          onClick={() => setIsDrawerOpen(true)}
          size={30}
          color="white"
        />
      )}
      <Search placeholder="recherche..." />
    </HeaderWrapper>
  );
};

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinks>
        <h3>Voir aussi :</h3>
        <Link to="/climatiseurs/onduleur">Onduleur</Link>
        <Link to="/climatiseurs/non-onduleur">Non Onduleur</Link>
        <Link to="/climatiseurs/onduleur">Monture supérieure</Link>
        <Link to="/climatiseurs/onduleur">Porte simple</Link>
        <Link to="/climatiseurs/onduleur">Cote à cote</Link>
        <Link to="/climatiseurs/onduleur">Porte française</Link>
        <Link to="/climatiseurs/onduleur">Télévision LED</Link>
        <Link to="/climatiseurs/onduleur">Séchoir à cuve simple</Link>
        <Link to="/climatiseurs/onduleur">Laveuse à cuve simple</Link>
        <Link to="/climatiseurs/onduleur">Baignoire jumelle</Link>
        <Link to="/climatiseurs/onduleur">Chargement frontal automatique</Link>
        <Link to="/climatiseurs/onduleur">
          Chargement par le haut automatique
        </Link>
        <Link to="/climatiseurs/onduleur">Congélateurs verticaux</Link>
        <Link to="/climatiseurs/onduleur">Congélateurs coffres</Link>
        <Link to="/climatiseurs/onduleur">Forfait mariage</Link>
      </FooterLinks>
      <FooterContactForm>
        <h3>Vos messages sont les bienvenue :</h3>
        <FooterContactFormInput
          type="email"
          placeholder="Votre adresse email"
        />
        <FooterContactFormTextArea placeholder="Votre message ..." rows={15} />
        <FooterContactFormInput value="Envoyer" type="submit" />
      </FooterContactForm>
      <FooterSocialMedia>
        <h3>Nous contacter via :</h3>
        <SocialMediaBox color="#1877f2">
          <BsFacebook size={25} />
        </SocialMediaBox>
        <SocialMediaBox color="rgb(29, 155, 240)">
          <BsTwitter size={25} />
        </SocialMediaBox>
        <SocialMediaBox color="#d33a73">
          <BsInstagram size={25} />
        </SocialMediaBox>
        <SocialMediaBox color="#f00">
          <BsYoutube size={25} />
        </SocialMediaBox>
        <SocialMediaBox color="#27a7e8">
          <BsTelegram size={25} />
        </SocialMediaBox>
      </FooterSocialMedia>
    </FooterWrapper>
  );
};
