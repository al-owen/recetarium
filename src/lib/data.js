"use server";
import { log } from "node:console";
import prisma from "./prisma";
import fs, { write } from 'node:fs';

export async function getMeals() {
  const data = await prisma.meal.findMany();
  return data;
}

export async function getMeal(id) {
  const data = await prisma.meal.findUnique({
    where: {
      id: id,
    },
  });
  return data;
}

export async function createMeal(data) {
  const { title, description, ingredients, time } = data;

  const meal = await prisma.meal.create({
    data: data,
  });
  return meal;
}

export async function updateMeal(id, data) {
  const meal = await prisma.meal.update({
    where: {
      id: id,
    },
    data: data,
  });
  return meal;
}

export async function deleteMeal(id) {
  const meal = await prisma.meal.delete({
    where: {
      id: id,
    },
  });
  return meal;
}