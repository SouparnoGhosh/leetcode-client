import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"

// Mock address data
const mockAddress = {
  addressLine1: "123 Main Street",
  addressLine2: "Apartment 4B",
  streetName1: "Downtown Avenue",
  streetName2: "Financial District",
  city: "Metropolis",
  state: "New York",
  pincode: "10001"
}

export default function AddressComponent() {
  const handleEdit = () => {
    // Implement edit functionality here
    console.log("Edit address")
  }

  const handleDelete = () => {
    // Implement delete functionality here
    console.log("Delete address")
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold">Address</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={handleEdit}>
              <Edit className="h-4 w-4" />
              <span className="sr-only">Edit address</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleDelete}
              className="hover:bg-destructive hover:text-destructive-foreground"
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete address</span>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p>{mockAddress.addressLine1}</p>
            <p>{mockAddress.addressLine2}</p>
            <p>{mockAddress.streetName1}</p>
            <p>{mockAddress.streetName2}</p>
          </div>
          <div>
            <p>{mockAddress.city}</p>
            <p>{mockAddress.state}</p>
            <p>{mockAddress.pincode}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}