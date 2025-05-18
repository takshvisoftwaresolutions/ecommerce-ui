import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Save } from 'lucide-react';

const Profile: React.FC = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
  });
  
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(profileData);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileData(formData);
    setEditing(false);
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Profile Information</h2>
        {!editing && (
          <button
            onClick={() => setEditing(true)}
            className="btn btn-outline py-1 px-4"
          >
            Edit
          </button>
        )}
      </div>
      
      {editing ? (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="input"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="input"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="input"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="input"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="input"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  className="input"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button
              type="submit"
              className="btn btn-primary py-2 px-4 flex items-center"
            >
              <Save className="h-5 w-5 mr-2" />
              Save Changes
            </button>
            
            <button
              type="button"
              onClick={() => {
                setFormData(profileData);
                setEditing(false);
              }}
              className="btn btn-outline py-2 px-4"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="flex items-start">
            <User className="h-5 w-5 text-gray-400 mt-1 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
              <p className="mt-1">{profileData.name}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-gray-400 mt-1 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Email</h3>
              <p className="mt-1">{profileData.email}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-gray-400 mt-1 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Phone</h3>
              <p className="mt-1">{profileData.phone}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-gray-400 mt-1 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Address</h3>
              <p className="mt-1">
                {profileData.address}, {profileData.city}, {profileData.state} {profileData.zipCode}, {profileData.country}
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Account Security</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700">Password</h3>
            <p className="text-gray-600 text-sm mt-1">Last changed 3 months ago</p>
            <button className="text-blue-600 hover:text-blue-800 text-sm mt-2">
              Change Password
            </button>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-700">Two-Factor Authentication</h3>
            <p className="text-gray-600 text-sm mt-1">Add an extra layer of security to your account</p>
            <button className="text-blue-600 hover:text-blue-800 text-sm mt-2">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;