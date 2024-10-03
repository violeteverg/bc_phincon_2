import express, { Request, Response } from "express";
import products from "./src/models/product.json";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.get("/calculation", (req: Request, res: Response) => {
  const { nilai1, nilai2, operator } = req.body;
  let hasil: number;

  switch (operator) {
    case "+":
      hasil = nilai1 + nilai2;
      break;
    case "-":
      hasil = nilai1 - nilai2;
      break;
    case "*":
      hasil = nilai1 * nilai2;
      break;
    case "/":
      hasil = nilai1 / nilai2;
      break;
    default:
      res.status(400).send("Operator tidak valid");
  }
  res.send({
    number1: nilai1,
    number2: nilai2,
    operator: operator,
    hasil: hasil,
  });
});

app.get("/product", (req: Request, res: Response) => {
  res.json(products);
});

app.get("/product/:id", (req: Request, res: Response) => {
  const product = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.get("/product/name/:name", (req: Request, res: Response) => {
  const productByName = products.filter((product) => {
    return product.productName.toLowerCase() === req.params.name.toLowerCase();
  });
  if (productByName) {
    res.json(productByName);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});
app.get("/product/price/:price", (req: Request, res: Response) => {
  const productByPrice = products.filter(
    (product) => product.price <= parseInt(req.params.price)
  );
  res.json(productByPrice);
});

app.get("/product/total", (req: Request, res: Response) => {
  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
  res.json({ totalPrice });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
