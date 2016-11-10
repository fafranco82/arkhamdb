<?php 

namespace AppBundle\Repository;

class EncounterRepository extends TranslatableRepository
{
	function __construct($entityManager)
	{
		parent::__construct($entityManager, $entityManager->getClassMetadata('AppBundle\Entity\Encounter'));
	}
}