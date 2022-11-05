import { List, Navbar, FormService } from "../componets";
import { useService } from "../context/services";
import { Filters } from "../models";

const ServicesPage = () => {
  const filters: Filters[] = [
    { id: 0, name: "All", category: "todo" },
    { id: 1, name: "Cars", category: "auto" },
    { id: 2, name: "Health", category: "salud" },
    { id: 3, name: "Home", category: "hogar" },
  ];

  const { listServices, tagFilter } = useService();

  const filterList = listServices.filter((data) => {
    if (tagFilter === "todo") return data;
    return tagFilter === data.category;
  });

  return (
    <>
      <header>
        <h2 className="text-center pt-3">Services</h2>
        <Navbar items={filters} />
      </header>
      <main>
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-sm-7 col-md-8 col-lg-9">
              <List data={filterList} />
            </div>
            <div className="col-sm-5 col-md-4 col-lg-3">
              <FormService />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ServicesPage;
