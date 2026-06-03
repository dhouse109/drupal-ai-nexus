import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { normalizePathname } from "@/seo/siteMetadata";

export const getCanonicalLocation = ({
  pathname,
  search = "",
  hash = "",
}: {
  pathname: string;
  search?: string;
  hash?: string;
}): string => `${normalizePathname(pathname)}${search}${hash}`;

const CanonicalUrlRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const canonicalLocation = getCanonicalLocation(location);
    const currentLocation = `${location.pathname}${location.search}${location.hash}`;

    if (canonicalLocation !== currentLocation) {
      navigate(canonicalLocation, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default CanonicalUrlRedirect;
