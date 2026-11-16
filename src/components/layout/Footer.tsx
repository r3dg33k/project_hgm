
import { CrescentMoon, DecorativeStar } from "../ui/DecorativeElements";

interface FooterProps {
  wifeName?: string;
  daughterName?: string;
}

export default function Footer({
  wifeName = "My Love",
  daughterName = "Our Little Miracle"
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="story-footer">
      <div className="footer-decoration" aria-hidden="true">
        <CrescentMoon size={52} color="#D6B779" />
        <DecorativeStar size={20} color="#F8E4A6" />
        <DecorativeStar size={14} color="#D6B779" />
      </div>

      <div className="footer-family" aria-hidden="true">
        <span className="footer-person footer-mother">♡</span>
        <span className="footer-person footer-father">♡</span>
        <span className="footer-person footer-baby">♡</span>
      </div>

      <p className="footer-eyebrow">
        OUR GREATEST BLESSING
      </p>

      <h2 className="footer-title">
        One Love.
        <br />
        Three Hearts.
        <br />
        <span>Forever a Family.</span>
      </h2>

      <p className="footer-dedication">
        For {wifeName}, the woman who made this journey extraordinary,
        and {daughterName}, the miracle who made our world complete.
      </p>

      <div className="footer-blessing">
        <span aria-hidden="true">☾</span>
        <p>
          May Allah bless our family with endless love,
          good health, faith and happiness.
        </p>
        <span aria-hidden="true">♡</span>
      </div>

      <div className="footer-bottom">
        <p>Made with endless love, for the two people who are my world.</p>
        <span>© {currentYear} · Our Little Story</span>
      </div>
    </footer>
  );
}
