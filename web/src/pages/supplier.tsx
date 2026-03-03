import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Title, TitleDescription, TitleRoot } from '@/components/ui/title';
import { SidebarLayout } from '@/layout/sidebarlayout';
import { Bell, Plus } from 'lucide-react';

const Supplier = () => {
  return (
    <SidebarProvider>
      <SidebarLayout />
      <main className="bg-[#09090B] text-white w-full min-h-screen">
        <div className="flex items-center justify-between p-4">
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="../pages/supplier.tsx">
                    Fornecedores
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-8">
            <Bell />
            <Avatar>
              <AvatarImage src="https://i.pinimg.com/736x/42/fc/a3/42fca3c24df31ddf6b1dec5ce7675227.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="p-8 flex items-center justify-between">
          <TitleRoot>
            <Title>Gerenciar Fornecedores</Title>
            <TitleDescription>
              Visualize, filtre e gerencie seus parceiros comerciais cadastrados
            </TitleDescription>
          </TitleRoot>

          <div>
            <Button className="bg-violet-700" size="lg">
              <Plus /> Novo Fornecedor
            </Button>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
};

export { Supplier };
