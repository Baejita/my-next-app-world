function PropertyPage({ params }) {
  // const router = useRouter();
  // const params = useParams();
  // const searchParams = useSearchParams();
  // const pathName = usePathname();

  return (
    <div>
      <div>Property Page {params.id}</div>
    </div>
  );
}

export default PropertyPage;

//search params เราจะเอาค่าหลังตัวแปล get("name") มาแสดงได้

//path name is /properties/ssf
