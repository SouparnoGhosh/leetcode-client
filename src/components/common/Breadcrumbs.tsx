import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const crumbs = [
    { name: "Home", url: "/" },
    ...pathnames.map((value, index) => {
      const url = `/${pathnames.slice(0, index + 1).join("/")}`;
      return { name: value.charAt(0).toUpperCase() + value.slice(1), url };
    }),
  ];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((crumb, index) => (
          <BreadcrumbItem key={crumb.url}>
            <BreadcrumbLink asChild>
              <Link to={crumb.url}>{crumb.name}</Link>
            </BreadcrumbLink>
            {index < crumbs.length - 1 && (
              <BreadcrumbSeparator />
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
