import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

// Mock data for orders
const mockOrders = [
  {
    id: "406-7895556-1956367",
    date: "29 August 2024",
    total: "₹185.00",
    shipTo: "Souparno Ghosh",
    deliveryDate: "2 September",
    items: [
      {
        name: "Oral-B Essential Floss- Mint Flavor",
        image: "/placeholder.svg?height=100&width=100",
        returnDate: "16 September 2024",
      },
    ],
  },
  {
    id: "406-3950965-1285929",
    date: "29 August 2024",
    total: "₹653.00",
    shipTo: "Souparno Ghosh",
    deliveryDate: "2 September",
    deliveryNote: "Package was handed to resident",
    items: [
      {
        name: "Surf Excel Easy Wash Detergent Liquid, 500 Ml, 1 Count",
        image: "/placeholder.svg?height=100&width=100",
        returnDate: "12 September 2024",
        quantity: 2,
      },
      {
        name: "Savlon Moisture Shield Germ Protection Liquid Handwash, 1500ml Hand Wash Refill, Protects from 99.9% Germs, Soft Moisturized Hands, 90% Natural Origin, Paraben and Silicon Free",
        image: "/placeholder.svg?height=100&width=100",
        returnDate: "12 September 2024",
      },
      {
        name: "Colgate Maxfresh Plax Antibacterial Mouthwash, 24/7 Fresh Breath, Alcohol Free Mouth Wash Liquid for Bad Breath - 500ml Pepper Mint (Complete Oral Care)",
        image: "/placeholder.svg?height=100&width=100",
        returnDate: "12 September 2024",
      },
    ],
  },
]

function OrderCard({ order }) {
  return (
    <Card className="mb-6">
      <CardHeader className="bg-muted/40 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <div className="text-sm text-muted-foreground">ORDER PLACED</div>
            <div>{order.date}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">TOTAL</div>
            <div>{order.total}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">SHIP TO</div>
            <div className="flex items-center">
              {order.shipTo} <ChevronDown className="h-4 w-4 ml-1" />
            </div>
          </div>
          <div className="sm:text-right">
            <div className="text-sm text-muted-foreground">ORDER # {order.id}</div>
            <div className="text-blue-600 flex items-center sm:justify-end">
              <span className="mr-1">View order details | Invoice</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6 px-4">
        <div className="text-lg font-semibold mb-4">
          Delivered {order.deliveryDate}
          {order.deliveryNote && <div className="text-sm font-normal">{order.deliveryNote}</div>}
        </div>
        {order.items.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-start mb-6">
            <Image src={item.image} alt={item.name} width={100} height={100} className="mr-4 mb-4 sm:mb-0" />
            <div className="flex-1">
              <div className="font-medium">{item.name}</div>
              <div className="text-sm text-muted-foreground">Return window closed on {item.returnDate}</div>
              <div className="mt-2 flex flex-wrap gap-2">
                <Button variant="outline" size="sm">Buy it again</Button>
                <Button variant="outline" size="sm">View your item</Button>
              </div>
            </div>
            {item.quantity && (
              <div className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-sm mt-2 sm:mt-0">
                {item.quantity}
              </div>
            )}
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between gap-2 px-4 py-4">
        <Button variant="outline" className="w-full sm:w-auto">Leave seller feedback</Button>
        <Button variant="outline" className="w-full sm:w-auto">Write a product review</Button>
      </CardFooter>
    </Card>
  )
}

export default function Component() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
      {mockOrders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}