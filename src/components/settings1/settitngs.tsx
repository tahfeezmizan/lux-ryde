/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react';
// Importing ShadCN components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming you have these UI components set up from ShadCN
import { Input } from '../ui/input';
//import { Switch } from '../ui/switch';
//import { Select } from '../ui/select';
import { Button } from '../ui/button';

interface UserSettings {
    name: string;
    email: string;
    notificationEnabled: boolean;
    theme: 'light' | 'dark';
}

 const SettingsPage2 = () => {
    const [settings, setSettings] = useState<UserSettings>({
        name: 'John Doe',
        email: 'john.doe@example.com',
        notificationEnabled: true,
        theme: 'light',
    });

    // Toggle between light/dark theme
    const toggleTheme = () => {
        setSettings((prev) => ({
            ...prev,
            theme: prev.theme === 'light' ? 'dark' : 'light',
        }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSettings({
            ...settings,
            [name]: value,
        });
    };

    // const handleSwitchChange = (checked: boolean) => {
    //     setSettings((prev) => ({
    //       ...prev,
    //       notificationEnabled: checked,
    //     }));
    //   };
      

    return (
        <div className={`min-h-screen ${settings.theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'} py-10 px-4 sm:px-6`}>
            <h1 className="text-4xl font-bold text-center mb-8">Settings</h1>

            <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
                {/* Profile Settings Card */}
                <Card className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border-gray-700 shadow-xl overflow-hidden backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle>Profile Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm">Full Name</label>
                                <Input
                                    value={settings.name}
                                    name="name"
                                    onChange={handleInputChange}
                                    className="w-full"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm">Email Address</label>
                                <Input
                                    value={settings.email}
                                    name="email"
                                    onChange={handleInputChange}
                                    className="w-full"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* <Card className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border-gray-700 shadow-xl backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle>Notification Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <label className="text-sm">Enable Notifications</label>
                            <Switch
  checked={settings.notificationEnabled}
  onCheckedChange={handleSwitchChange}
/>

                        </div>
                    </CardContent>
                </Card> */}

                {/* Theme Settings Card */}
                {/* <Card className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border-gray-700 shadow-xl backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle>Theme Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm">Theme</label>
                                <Select
                                    value={settings.theme}
                                    onChange={(e:any) => setSettings({ ...settings, theme: e.target.value as 'light' | 'dark' })}
                                >
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card> */}
            </div>

            {/* Save Button */}
            <div className="mt-8 text-center">
                <Button onClick={toggleTheme} className="bg-blue-500 hover:bg-blue-600">
                    Toggle Theme
                </Button>
            </div>
        </div>
    );
};

export default SettingsPage2;
