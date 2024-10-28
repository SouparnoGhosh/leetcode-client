"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", 
  "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
]

export default function AddressModal() {
  const [open, setOpen] = useState(false)
  const [address, setAddress] = useState({
    streetName1: "",
    streetName2: "",
    city: "",
    state: "",
    pincode: ""
  })

  const [isFormValid, setIsFormValid] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAddress(prev => {
      const newAddress = { ...prev, [name]: value }
      setIsFormValid(newAddress.streetName1 !== "" && newAddress.city !== "" && newAddress.state !== "" && newAddress.pincode !== "")
      return newAddress
    })
  }

  const handleStateChange = (value: string) => {
    setAddress(prev => {
      const newAddress = { ...prev, state: value }
      setIsFormValid(newAddress.streetName1 !== "" && newAddress.city !== "" && newAddress.state !== "" && newAddress.pincode !== "")
      return newAddress
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted address:", address)
    setOpen(false)
    // Here you would typically send the data to your backend
  }

  const handleCancel = () => {
    setOpen(false)
    // Reset form fields if needed
    setAddress({
      streetName1: "",
      streetName2: "",
      city: "",
      state: "",
      pincode: ""
    })
    setIsFormValid(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Address</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" onInteractOutside={(e) => e.preventDefault()} onEscapeKeyDown={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Edit Address</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="streetName1">Street Name 1</Label>
            <Input
              id="streetName1"
              name="streetName1"
              value={address.streetName1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="streetName2">Street Name 2</Label>
            <Input
              id="streetName2"
              name="streetName2"
              value={address.streetName2}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              value={address.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="state">State</Label>
            <Select onValueChange={handleStateChange} value={address.state} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent>
                {indianStates.map((state) => (
                  <SelectItem key={state} value={state}>{state}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="pincode">Pincode</Label>
            <Input
              id="pincode"
              name="pincode"
              value={address.pincode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-between mt-4">
            <Button type="button" variant="destructive" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit" disabled={!isFormValid}>
              Save Address
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}