import Title from '../Shared/Title';
import Product from './Product';

const trees = [
  {
    id: "OakTree_12345678901234",
    tree_title: "Oak Tree",
    price: 150,
    tree_img: "https://img.freepik.com/free-photo/beautiful-park_1417-1419.jpg?t=st=1751003922~exp=1751007522~hmac=7648c7e4e7eb492608390b1ff7fe51f3118bad944ecc0d7aa647f1dc0377a193&w=740"
  },
  {
    id: "PineTree_98765432109876",
    tree_title: "Pine Tree",
    price: 120,
    tree_img: "https://img.freepik.com/premium-photo/bushes-adorned-rows_43730-233.jpg?w=740"
  },
  {
    id: "MapleTree_24681357902468",
    tree_title: "Maple Tree",
    price: 130,
    tree_img: "https://img.freepik.com/premium-photo/luxury-landscape-design-tropical-garden-beautiful-view-tropical-landscape_179755-233.jpg?w=740"
  },
  {
    id: "CherryBlossom_11223344556677",
    tree_title: "Cherry Blossom",
    price: 200,
    tree_img: "https://img.freepik.com/premium-photo/landscaping-garden-with-green-lawn-decorative-plants-shaped-boxwood-gardening-concept_459897-6237.jpg?w=740"
  }
];

const Popular = () => {
  return (
    <div>
      <Title text={"Most popular products"} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 mx-w-7xl px-3  ">
        {trees.map(tree =>

          <Product key={tree.id} tree={tree} />
        )}
      </div>
    </div>
  );
};

export default Popular;